// Chrome拡張のバックグラウンドスクリプト
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where, orderBy, Timestamp } from "firebase/firestore";
import type { PokePasteItem, PokePasteFirestoreData, ExtractTeamDataResponse, SavePokePasteResponse, GetPokePasteListResponse } from "../types/pokepaste";

console.log("Background script loaded");

// Firebase設定（環境変数から取得）
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Firebase初期化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// PokePasteをFirestoreに保存
async function savePokePasteToFirestore(teamData: ExtractTeamDataResponse["data"], userId: string): Promise<SavePokePasteResponse> {
    try {
        if (!teamData) {
            return { success: false, error: "チームデータが見つかりません" };
        }

        const now = Timestamp.now();
        const pokePasteData: PokePasteFirestoreData = {
            teamName: teamData.teamName,
            author: teamData.author,
            pokemon: teamData.pokemon,
            url: teamData.url,
            userId: userId,
            createdAt: now,
            updatedAt: now,
        };

        const docRef = await addDoc(collection(db, "pokepastes"), pokePasteData);

        const savedItem: PokePasteItem = {
            id: docRef.id,
            teamName: pokePasteData.teamName,
            author: pokePasteData.author,
            pokemon: pokePasteData.pokemon,
            url: pokePasteData.url,
            userId: pokePasteData.userId,
            createdAt: pokePasteData.createdAt.toDate(),
            updatedAt: pokePasteData.updatedAt.toDate(),
        };

        console.log("PokePaste saved with ID:", docRef.id);
        return { success: true, data: savedItem };
    } catch (error) {
        console.error("Error saving PokePaste:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        return { success: false, error: errorMessage };
    }
}

// ユーザーのPokePasteリストを取得
async function getUserPokePasteList(userId: string): Promise<GetPokePasteListResponse> {
    try {
        const q = query(collection(db, "pokepastes"), where("userId", "==", userId), orderBy("createdAt", "desc"));

        const querySnapshot = await getDocs(q);
        const pokePasteList: PokePasteItem[] = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data() as PokePasteFirestoreData;
            pokePasteList.push({
                id: doc.id,
                teamName: data.teamName,
                author: data.author,
                pokemon: data.pokemon,
                url: data.url,
                userId: data.userId,
                createdAt: data.createdAt.toDate(),
                updatedAt: data.updatedAt.toDate(),
            });
        });

        return { success: true, data: pokePasteList };
    } catch (error) {
        console.error("Error getting PokePaste list:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        return { success: false, error: errorMessage };
    }
}

// 現在のユーザーIDを取得
async function getCurrentUserId(): Promise<string | null> {
    return new Promise((resolve) => {
        chrome.storage.local.get(["user"], (result) => {
            resolve(result.user?.uid || null);
        });
    });
}

// 拡張機能がインストールされたときの処理
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});

// メッセージを受信したときの処理
chrome.runtime.onMessage.addListener((request: { action: string }, _sender: chrome.runtime.MessageSender, sendResponse: (response?: unknown) => void) => {
    console.log("Message received:", request);

    (async () => {
        try {
            switch (request.action) {
                case "addPokePaste": {
                    const userId = await getCurrentUserId();
                    console.log("Current user ID:", userId);
                    if (!userId) {
                        sendResponse({ success: false, error: "ユーザーがログインしていません" });
                        return;
                    }

                    // アクティブなタブがpokepast.esかチェック
                    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
                    const activeTab = tabs[0];

                    if (!activeTab?.url?.includes("pokepast.es")) {
                        sendResponse({ success: false, error: "pokepast.esのページで実行してください" });
                        return;
                    }

                    // content scriptからチームデータを取得
                    const response = (await chrome.tabs.sendMessage(activeTab.id!, { action: "extractTeamData" })) as ExtractTeamDataResponse;

                    if (!response.success || !response.data) {
                        sendResponse({ success: false, error: response.error || "チームデータの取得に失敗しました" });
                        return;
                    }

                    // Firestoreに保存
                    const saveResult = await savePokePasteToFirestore(response.data, userId);
                    sendResponse(saveResult);
                    break;
                }

                case "getPokePasteList": {
                    const userId = await getCurrentUserId();
                    if (!userId) {
                        sendResponse({ success: false, error: "ユーザーがログインしていません" });
                        return;
                    }

                    const listResult = await getUserPokePasteList(userId);
                    sendResponse(listResult);
                    break;
                }

                default:
                    sendResponse({ success: false, error: "Unknown action" });
            }
        } catch (error) {
            console.error("Error handling message:", error);
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            sendResponse({ success: false, error: errorMessage });
        }
    })();

    return true; // 非同期レスポンスを有効にする
});
