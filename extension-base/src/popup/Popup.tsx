import React, { useState, useEffect } from "react";
import type { PokePasteItem, SavePokePasteResponse, GetPokePasteListResponse } from "../types/pokepaste";

const Popup: React.FC = () => {
    const [pokePasteList, setPokePasteList] = useState<PokePasteItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // 認証状態とPokePasteリストを読み込み
    useEffect(() => {
        checkAuthStatus();
        loadPokePasteList();
    }, []);

    // 認証状態をチェック
    const checkAuthStatus = () => {
        chrome.storage.local.get(["user"], (result) => {
            setIsAuthenticated(!!result.user);
        });
    };

    // PokePasteリストを読み込み
    const loadPokePasteList = () => {
        setLoading(true);
        chrome.runtime.sendMessage({ action: "getPokePasteList" }, (response: GetPokePasteListResponse) => {
            setLoading(false);
            if (response.success && response.data) {
                setPokePasteList(response.data);
            } else {
                console.error("Error loading PokePaste list:", response.error);
                setMessage(response.error || "リストの読み込みに失敗しました");
            }
        });
    };

    // PokePasteを追加
    const handleAddPokePaste = () => {
        if (!isAuthenticated) {
            setMessage("ログインが必要です");
            return;
        }

        setLoading(true);
        setMessage("PokePasteを保存中...");

        chrome.runtime.sendMessage({ action: "addPokePaste" }, (response: SavePokePasteResponse) => {
            setLoading(false);
            if (response.success && response.data) {
                setPokePasteList((prev) => [response.data!, ...prev]);
                setMessage("PokePasteを保存しました！");
                setTimeout(() => setMessage(""), 3000);
            } else {
                setMessage(response.error || "PokePasteの保存に失敗しました");
                setTimeout(() => setMessage(""), 5000);
            }
        });
    };

    // PokePasteを開く
    const handleOpenPokePaste = (url: string) => {
        chrome.tabs.create({ url });
    };

    // 日付をフォーマット
    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat("ja-JP", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        }).format(date);
    };

    if (!isAuthenticated) {
        return (
            <div style={{ width: "400px", padding: "20px", textAlign: "center" }}>
                <h2>PokePaste Manager</h2>
                <p>この機能を使用するにはログインが必要です。</p>
                <button
                    onClick={() => chrome.tabs.create({ url: "https://hayatosum.github.io/tools/auth.html" })}
                    style={{
                        backgroundColor: "#4285f4",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Googleでサインイン
                </button>
            </div>
        );
    }

    return (
        <div style={{ width: "400px", padding: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h2>PokePaste Manager</h2>
                <button
                    onClick={handleAddPokePaste}
                    disabled={loading}
                    style={{
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "4px",
                        cursor: loading ? "not-allowed" : "pointer",
                        opacity: loading ? 0.6 : 1,
                    }}
                >
                    {loading ? "保存中..." : "追加"}
                </button>
            </div>

            {message && (
                <div
                    style={{
                        padding: "10px",
                        marginBottom: "15px",
                        backgroundColor: message.includes("失敗") || message.includes("Error") ? "#ffebee" : "#e8f5e8",
                        color: message.includes("失敗") || message.includes("Error") ? "#c62828" : "#2e7d32",
                        borderRadius: "4px",
                        fontSize: "14px",
                    }}
                >
                    {message}
                </div>
            )}

            <div style={{ marginBottom: "15px" }}>
                <h3>保存済みPokePaste ({pokePasteList.length})</h3>
            </div>

            {loading && pokePasteList.length === 0 ? (
                <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>読み込み中...</div>
            ) : pokePasteList.length === 0 ? (
                <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
                    まだPokePasteが保存されていません。
                    <br />
                    pokepast.esのページで「追加」ボタンを押して保存してください。
                </div>
            ) : (
                <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                    {pokePasteList.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                border: "1px solid #ddd",
                                borderRadius: "4px",
                                padding: "12px",
                                marginBottom: "8px",
                                cursor: "pointer",
                                backgroundColor: "#fafafa",
                            }}
                            onClick={() => handleOpenPokePaste(item.url)}
                        >
                            <div style={{ fontWeight: "bold", marginBottom: "4px" }}>{item.teamName || "(チーム名なし)"}</div>
                            <div style={{ color: "#666", fontSize: "14px", marginBottom: "4px" }}>作者: {item.author || "(作者不明)"}</div>
                            <div style={{ color: "#666", fontSize: "12px", marginBottom: "8px" }}>ポケモン数: {item.pokemon.length}匹</div>
                            <div style={{ color: "#888", fontSize: "11px" }}>保存日時: {formatDate(item.createdAt)}</div>
                        </div>
                    ))}
                </div>
            )}

            <div style={{ marginTop: "15px", padding: "10px", backgroundColor: "#f5f5f5", borderRadius: "4px" }}>
                <div style={{ fontSize: "12px", color: "#666" }}>使い方: pokepast.esのページを開いて「追加」ボタンを押すと、チーム情報が保存されます。</div>
            </div>
        </div>
    );
};

export default Popup;
