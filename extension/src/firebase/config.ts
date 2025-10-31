// Firebase設定ファイル
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase設定（実際のプロジェクトの値に置き換えてください）
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "your-api-key",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "your-project.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "your-project-id",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "your-project.appspot.com",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "your-app-id",
};

// Firebase初期化
const app = initializeApp(firebaseConfig);

// 認証とFirestoreの初期化
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Chrome拡張用のスコープ設定
googleProvider.addScope("profile");
googleProvider.addScope("email");

export default app;
