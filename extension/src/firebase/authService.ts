// Firebase認証サービス
import { signInWithPopup, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import type { User } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, googleProvider, db } from "./config";

export interface UserProfile {
    uid: string;
    email: string;
    displayName: string;
    photoURL?: string;
    createdAt: number;
    lastLoginAt: number;
}

class AuthService {
    // Googleログイン
    async signInWithGoogle(): Promise<UserProfile | null> {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            if (user) {
                const userProfile = await this.createOrUpdateUserProfile(user);
                return userProfile;
            }
            return null;
        } catch (error) {
            console.error("Google login error:", error);
            throw error;
        }
    }

    // メール・パスワードでログイン
    async signInWithEmail(email: string, password: string): Promise<UserProfile | null> {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            const user = result.user;

            if (user) {
                const userProfile = await this.createOrUpdateUserProfile(user);
                return userProfile;
            }
            return null;
        } catch (error) {
            console.error("Email login error:", error);
            throw error;
        }
    }

    // メール・パスワードでアカウント作成
    async createAccount(email: string, password: string, displayName: string): Promise<UserProfile | null> {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const user = result.user;

            if (user) {
                // プロフィールを更新
                await updateProfile(user, { displayName });

                const userProfile = await this.createOrUpdateUserProfile(user);
                return userProfile;
            }
            return null;
        } catch (error) {
            console.error("Account creation error:", error);
            throw error;
        }
    }

    // ログアウト
    async signOut(): Promise<void> {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Logout error:", error);
            throw error;
        }
    }

    // 認証状態の監視
    onAuthStateChanged(callback: (user: User | null) => void) {
        return onAuthStateChanged(auth, callback);
    }

    // 現在のユーザーを取得
    getCurrentUser(): User | null {
        return auth.currentUser;
    }

    // ユーザープロフィールをFirestoreに保存/更新
    private async createOrUpdateUserProfile(user: User): Promise<UserProfile> {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        const now = Date.now();

        if (userSnap.exists()) {
            // 既存ユーザーの場合、最終ログイン時刻を更新
            const userData = userSnap.data() as UserProfile;
            const updatedProfile: UserProfile = {
                ...userData,
                lastLoginAt: now,
                displayName: user.displayName || userData.displayName,
                photoURL: user.photoURL || userData.photoURL,
            };

            await setDoc(userRef, updatedProfile);
            return updatedProfile;
        } else {
            // 新規ユーザーの場合、プロフィールを作成
            const newProfile: UserProfile = {
                uid: user.uid,
                email: user.email || "",
                displayName: user.displayName || "Unknown User",
                photoURL: user.photoURL || undefined,
                createdAt: now,
                lastLoginAt: now,
            };

            await setDoc(userRef, newProfile);
            return newProfile;
        }
    }

    // PokePastデータをユーザーに関連付けて保存
    async savePokePastForUser(url: string, title: string): Promise<void> {
        const user = this.getCurrentUser();
        if (!user) {
            throw new Error("User not authenticated");
        }

        const pokePastData = {
            url,
            title,
            timestamp: Date.now(),
            id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            userId: user.uid,
        };

        const pokePastRef = doc(db, "pokepasts", pokePastData.id);
        await setDoc(pokePastRef, pokePastData);
    }
}

export const authService = new AuthService();
