// Chrome拡張のバックグラウンドスクリプト
let isInitialized = false;

// 拡張機能の初期化
function initializeExtension() {
    if (isInitialized) return;
    isInitialized = true;
}

// 拡張機能がインストールされたときの処理
chrome.runtime.onInstalled.addListener(() => {
    initializeExtension();
});

// 未処理のPromise拒否をキャッチ
self.addEventListener("unhandledrejection", (event) => {
    console.warn("Unhandled promise rejection:", event.reason);
    event.preventDefault();
});

interface PokePastItem {
    url: string;
    title: string;
    timestamp: number;
    id: string;
}

// 認証成功時の処理
async function handleAuthSuccess(user: any, sendResponse: (response?: unknown) => void) {
    console.log("handleAuthSuccess called with user:", user);
    try {
        const userProfile = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || user.email.split("@")[0],
            photoURL: user.photoURL,
            createdAt: user.createdAt || Date.now(),
            lastLoginAt: user.lastLoginAt || Date.now(),
        };

        console.log("Saving user profile to storage:", userProfile);

        // Chrome拡張機能のストレージに保存
        await chrome.storage.local.set({
            currentUser: userProfile,
            isAuthenticated: true,
        });

        // 保存確認
        const result = await chrome.storage.local.get(["currentUser", "isAuthenticated"]);
        console.log("Storage verification:", result);

        console.log("Authentication successful, user profile saved:", userProfile);
        sendResponse({ success: true, user: userProfile });
    } catch (error) {
        console.error("Error handling auth success:", error);
        sendResponse({ success: false, error: "認証の処理中にエラーが発生しました" });
    }
}

// メッセージを受信したときの処理
chrome.runtime.onMessage.addListener((request: any, sender: chrome.runtime.MessageSender, sendResponse: (response?: unknown) => void) => {
    console.log("Background received message:", request, "from:", sender);

    // 初期化されていない場合は初期化を実行
    if (!isInitialized) {
        initializeExtension();
    }

    try {
        // 認証メッセージの場合
        if (request && request.type === "AUTH_SUCCESS" && request.user) {
            console.log("Processing AUTH_SUCCESS message:", request.user);
            handleAuthSuccess(request.user, sendResponse);
            return true;
        }

        if (request && request.type === "AUTH_ERROR") {
            console.error("Authentication error:", request.error);
            sendResponse({ success: false, error: request.error });
            return true;
        }

        if (!request || typeof request.action !== "string") {
            sendResponse({
                success: false,
                error: "不正なリクエスト形式です",
            });
            return false;
        }

        if (request.action === "addPokePast") {
            handleAddPokePast(sendResponse);
            return true; // 非同期レスポンスを示す
        }

        if (request.action === "getPokePastList") {
            handleGetPokePastList(sendResponse);
            return true; // 非同期レスポンスを示す
        }

        if (request.action === "ping") {
            sendResponse({
                success: true,
                message: "pong",
                initialized: isInitialized,
                timestamp: new Date().toISOString(),
            });
            return false;
        }

        // その他のアクション
        sendResponse({
            success: false,
            error: `未知のアクション: ${request.action}`,
        });
        return false;
    } catch (error) {
        sendResponse({
            success: false,
            error: `メッセージリスナーエラー: ${error instanceof Error ? error.message : "不明なエラー"}`,
        });
        return false;
    }
}); // PokePast URL追加の処理
async function handleAddPokePast(sendResponse: (response?: unknown) => void) {
    try {
        // アクティブなタブの情報を取得
        const tabs = await new Promise<chrome.tabs.Tab[]>((resolve) => {
            chrome.tabs.query({ active: true, currentWindow: true }, resolve);
        });

        const activeTab = tabs[0];

        if (!activeTab || !activeTab.url) {
            sendResponse({
                success: false,
                error: "Could not access the current tab",
            });
            return;
        }

        if (!activeTab.url.includes("pokepast.es")) {
            sendResponse({
                success: false,
                error: "This extension only works on pokepast.es URLs",
                currentUrl: activeTab.url,
            });
            return;
        }

        // 新しいアイテムを作成
        const newItem: PokePastItem = {
            url: activeTab.url,
            title: activeTab.title || "No title",
            timestamp: Date.now(),
            id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        };

        // 既存のURLを取得
        const result = await new Promise<{ pokepastUrls?: PokePastItem[] }>((resolve) => {
            chrome.storage.local.get(["pokepastUrls"], (items) => {
                resolve(items as { pokepastUrls?: PokePastItem[] });
            });
        });

        const existingUrls: PokePastItem[] = result.pokepastUrls || [];

        // 重複チェック
        const isDuplicate = existingUrls.some((item) => item.url === newItem.url);

        if (isDuplicate) {
            sendResponse({
                success: false,
                error: "This URL is already saved",
                url: newItem.url,
            });
            return;
        }

        // 新しいアイテムを追加
        const updatedUrls = [newItem, ...existingUrls];

        // ストレージに保存
        await new Promise<void>((resolve, reject) => {
            chrome.storage.local.set({ pokepastUrls: updatedUrls }, () => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve();
                }
            });
        });

        sendResponse({
            success: true,
            url: newItem.url,
            title: newItem.title,
            message: "URLを保存しました",
        });
    } catch (error) {
        sendResponse({
            success: false,
            error: `処理エラー: ${error instanceof Error ? error.message : "不明なエラー"}`,
        });
    }
}

// 保存されたURL一覧取得の処理
async function handleGetPokePastList(sendResponse: (response?: unknown) => void) {
    try {
        const result = await new Promise<{ pokepastUrls?: PokePastItem[] }>((resolve) => {
            chrome.storage.local.get(["pokepastUrls"], (items) => {
                resolve(items as { pokepastUrls?: PokePastItem[] });
            });
        });

        const savedUrls: PokePastItem[] = result.pokepastUrls || [];

        sendResponse({
            success: true,
            data: savedUrls,
        });
    } catch (error) {
        sendResponse({
            success: false,
            error: `取得エラー: ${error instanceof Error ? error.message : "不明なエラー"}`,
        });
    }
}
