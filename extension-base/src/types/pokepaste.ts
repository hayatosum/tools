// Firestore pokepastesコレクション用のTypeScript型定義
import { Timestamp } from "firebase/firestore";

export interface PokemonData {
    name: string;
}

export interface PokePasteItem {
    id?: string; // Firestore document ID
    teamName: string; // チーム名 (html>body>aside>h1)
    author: string; // 作者 (html>body>aside>h2)
    pokemon: PokemonData[]; // ポケモン名リスト (最大6匹)
    url: string; // pokepast.esのURL
    userId: string; // 保存したユーザーのUID
    createdAt: Date; // 保存日時
    updatedAt: Date; // 更新日時
}

// Firestore保存用のデータ（Dateオブジェクトをタイムスタンプに変換）
export interface PokePasteFirestoreData {
    teamName: string;
    author: string;
    pokemon: PokemonData[];
    url: string;
    userId: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}

// APIレスポンス用の型定義
export interface ExtractTeamDataResponse {
    success: boolean;
    data?: {
        teamName: string;
        author: string;
        pokemon: PokemonData[];
        url: string;
    };
    error?: string;
}

export interface SavePokePasteResponse {
    success: boolean;
    data?: PokePasteItem;
    error?: string;
}

export interface GetPokePasteListResponse {
    success: boolean;
    data?: PokePasteItem[];
    error?: string;
}
