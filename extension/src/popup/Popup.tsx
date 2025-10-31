import React, { useState, useEffect } from "react";
import LoginComponent from "../components/LoginComponent";
import type { UserProfile } from "../firebase/authService";

interface PokePastItem {
    url: string;
    title: string;
    timestamp: number;
    id: string;
}

const Popup: React.FC = () => {
    const [currentUrl, setCurrentUrl] = useState<string>("");
    const [isPokePastSite, setIsPokePastSite] = useState<boolean>(false);
    const [status, setStatus] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [savedUrls, setSavedUrls] = useState<PokePastItem[]>([]);
    const [showList, setShowList] = useState<boolean>(false);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    // 認証状態表示用
    const getUserDisplayText = () => {
        if (isAuthenticated && user) {
            return `👤 ${user.displayName}`;
        }
        return "🔒 Not logged in";
    };

    // ダークテーマの色定義
    const darkTheme = {
        background: "#1a1a1a",
        surface: "#2d2d2d",
        surfaceVariant: "#3a3a3a",
        primary: "#4fc3f7",
        primaryVariant: "#29b6f6",
        secondary: "#81c784",
        error: "#ef5350",
        warning: "#ffb74d",
        onBackground: "#ffffff",
        onSurface: "#e0e0e0",
        onSurfaceVariant: "#b0b0b0",
        border: "#4a4a4a",
        borderLight: "#3a3a3a",
        success: "#66bb6a",
        successLight: "#2e7d32",
        errorLight: "#c62828",
        warningLight: "#f57c00",
    };

    // 初期化処理
    useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (chrome.runtime.lastError) {
                return;
            }

            const activeTab = tabs[0];
            if (activeTab?.url) {
                setCurrentUrl(activeTab.url);
                setIsPokePastSite(activeTab.url.includes("pokepast.es"));
            }
        });
    }, []);

    // URL一覧を読み込み
    const loadSavedUrls = () => {
        chrome.runtime.sendMessage({ action: "getPokePastList" }, (response: unknown) => {
            if (chrome.runtime.lastError || !response) {
                setSavedUrls([]);
                return;
            }

            if (typeof response === "object" && response !== null) {
                const responseObj = response as Record<string, unknown>;
                if ("success" in responseObj && responseObj.success === true) {
                    if ("data" in responseObj && Array.isArray(responseObj.data)) {
                        setSavedUrls(responseObj.data);
                    } else {
                        setSavedUrls([]);
                    }
                } else {
                    setSavedUrls([]);
                }
            } else {
                setSavedUrls([]);
            }
        });
    };

    // URL追加処理
    const handleAddClick = () => {
        setIsLoading(true);
        setStatus("");

        chrome.runtime.sendMessage({ action: "addPokePast" }, (response: unknown) => {
            setIsLoading(false);

            if (chrome.runtime.lastError) {
                setStatus(`❌ 通信エラー: ${chrome.runtime.lastError.message}`);
                return;
            }

            if (!response) {
                setStatus("❌ レスポンスなし");
                return;
            }

            if (typeof response === "object" && response !== null) {
                const responseObj = response as Record<string, unknown>;
                if ("success" in responseObj && responseObj.success === true) {
                    const message = "message" in responseObj && typeof responseObj.message === "string" ? responseObj.message : "URL保存完了";
                    const url = "url" in responseObj && typeof responseObj.url === "string" ? responseObj.url : "";

                    setStatus(`✅ ${message}${url ? `\nURL: ${url}` : ""}`);
                    loadSavedUrls();
                } else {
                    const errorMsg = "error" in responseObj && typeof responseObj.error === "string" ? responseObj.error : "保存に失敗しました";
                    setStatus(`❌ ${errorMsg}`);
                }
            } else {
                setStatus("❌ 不正なレスポンス形式");
            }
        });
    };

    // リスト表示切り替え
    const handleToggleList = () => {
        if (!showList) {
            loadSavedUrls();
        }
        setShowList(!showList);
    };

    // ログインハンドラ
    const handleLogin = (userProfile: UserProfile) => {
        setUser(userProfile);
        setIsAuthenticated(true);
        setStatus(`✅ Logged in as ${userProfile.displayName}`);
    };

    // ログアウトハンドラ
    const handleLogout = () => {
        setUser(null);
        setIsAuthenticated(false);
        setStatus("👋 Logged out");
    };

    // 日時フォーマット
    const formatDate = (timestamp: number) => {
        return new Date(timestamp).toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    // URL開く
    const openUrl = (url: string) => {
        chrome.tabs.create({ url });
    };

    return (
        <div
            style={{
                width: "380px",
                padding: "12px",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                backgroundColor: darkTheme.background,
                color: darkTheme.onBackground,
                minHeight: "180px",
            }}
        >
            {/* ヘッダー */}
            <div
                style={{
                    borderBottom: `1px solid ${darkTheme.border}`,
                    paddingBottom: "8px",
                    marginBottom: "12px",
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h2
                        style={{
                            margin: "0",
                            color: darkTheme.primary,
                            fontSize: "16px",
                            fontWeight: "600",
                        }}
                    >
                        🌙 PokePast Extension
                    </h2>
                    <div
                        style={{
                            fontSize: "11px",
                            color: darkTheme.onSurfaceVariant,
                        }}
                    >
                        {getUserDisplayText()}
                    </div>
                </div>
            </div>

            {/* ログインコンポーネント */}
            <LoginComponent onLogin={handleLogin} onLogout={handleLogout} darkTheme={darkTheme} />

            {/* 現在のURL表示 */}
            <div
                style={{
                    marginBottom: "12px",
                    padding: "10px",
                    backgroundColor: darkTheme.surface,
                    borderRadius: "6px",
                    border: `1px solid ${darkTheme.border}`,
                }}
            >
                <div
                    style={{
                        fontSize: "12px",
                        color: darkTheme.onSurface,
                        fontWeight: "500",
                        marginBottom: "6px",
                    }}
                >
                    📍 Current URL:
                </div>
                <div
                    style={{
                        wordBreak: "break-all",
                        backgroundColor: darkTheme.surfaceVariant,
                        padding: "6px 8px",
                        borderRadius: "4px",
                        fontSize: "11px",
                        color: darkTheme.onSurface,
                        border: `1px solid ${darkTheme.borderLight}`,
                    }}
                >
                    {currentUrl || "Loading..."}
                </div>
            </div>

            {/* メインボタン */}
            <div style={{ marginBottom: "12px" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "8px",
                        padding: "6px 10px",
                        backgroundColor: isPokePastSite ? `${darkTheme.success}20` : `${darkTheme.error}20`,
                        borderRadius: "5px",
                        border: `1px solid ${isPokePastSite ? darkTheme.success : darkTheme.error}40`,
                    }}
                >
                    <span
                        style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: isPokePastSite ? darkTheme.success : darkTheme.error,
                            marginRight: "8px",
                            boxShadow: `0 0 6px ${isPokePastSite ? darkTheme.success : darkTheme.error}60`,
                        }}
                    ></span>
                    <span
                        style={{
                            fontSize: "13px",
                            color: isPokePastSite ? darkTheme.success : darkTheme.error,
                            fontWeight: "500",
                        }}
                    >
                        {isPokePastSite ? "✓ PokePast site detected" : "✗ Not a PokePast site"}
                    </span>
                </div>

                <button
                    onClick={handleAddClick}
                    disabled={!isPokePastSite || isLoading}
                    style={{
                        width: "100%",
                        padding: "10px 20px",
                        backgroundColor: isPokePastSite && !isLoading ? darkTheme.success : darkTheme.surfaceVariant,
                        color: isPokePastSite && !isLoading ? "#ffffff" : darkTheme.onSurfaceVariant,
                        border: `1px solid ${isPokePastSite && !isLoading ? darkTheme.success : darkTheme.border}`,
                        borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: "600",
                        cursor: isPokePastSite && !isLoading ? "pointer" : "not-allowed",
                        transition: "all 0.2s ease",
                        boxShadow: isPokePastSite && !isLoading ? `0 3px 8px ${darkTheme.success}40` : "none",
                    }}
                >
                    {isLoading ? "⏳ 処理中..." : isPokePastSite ? "📝 URLを追加" : "❌ 無効"}
                </button>

                {!isPokePastSite && (
                    <div
                        style={{
                            marginTop: "6px",
                            padding: "6px 8px",
                            fontSize: "11px",
                            color: darkTheme.warning,
                            backgroundColor: `${darkTheme.warning}20`,
                            border: `1px solid ${darkTheme.warning}40`,
                            borderRadius: "4px",
                            textAlign: "center",
                        }}
                    >
                        💡 このボタンは pokepast.es サイトでのみ有効です
                    </div>
                )}
            </div>

            {/* ステータス表示 */}
            {status && (
                <div
                    style={{
                        marginTop: "12px",
                        padding: "10px",
                        backgroundColor: status.includes("✅") ? `${darkTheme.success}20` : `${darkTheme.error}20`,
                        border: `1px solid ${status.includes("✅") ? darkTheme.success : darkTheme.error}40`,
                        borderRadius: "6px",
                        fontSize: "12px",
                        color: status.includes("✅") ? darkTheme.success : darkTheme.error,
                        whiteSpace: "pre-line",
                        fontWeight: "500",
                    }}
                >
                    {status}
                </div>
            )}

            {/* URL一覧 */}
            <div
                style={{
                    marginTop: "16px",
                    borderTop: `1px solid ${darkTheme.border}`,
                    paddingTop: "12px",
                }}
            >
                <button
                    onClick={handleToggleList}
                    style={{
                        width: "100%",
                        padding: "8px 14px",
                        backgroundColor: darkTheme.primary,
                        color: darkTheme.background,
                        border: "none",
                        borderRadius: "5px",
                        fontSize: "13px",
                        fontWeight: "500",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        boxShadow: `0 3px 8px ${darkTheme.primary}30`,
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = darkTheme.primaryVariant;
                        e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = darkTheme.primary;
                        e.currentTarget.style.transform = "translateY(0)";
                    }}
                >
                    {showList ? "📁 リストを非表示" : "📂 保存されたURLを表示"}
                </button>

                {showList && (
                    <div style={{ marginTop: "12px" }}>
                        <h3
                            style={{
                                margin: "0 0 8px 0",
                                fontSize: "14px",
                                color: darkTheme.onSurface,
                            }}
                        >
                            💾 保存されたURL ({savedUrls.length}件)
                        </h3>

                        {savedUrls.length === 0 ? (
                            <div
                                style={{
                                    padding: "12px",
                                    textAlign: "center",
                                    color: darkTheme.onSurfaceVariant,
                                    fontStyle: "italic",
                                    backgroundColor: darkTheme.surface,
                                    border: `1px solid ${darkTheme.border}`,
                                    borderRadius: "6px",
                                }}
                            >
                                📝 保存されたURLはありません
                            </div>
                        ) : (
                            <div
                                style={{
                                    maxHeight: "250px",
                                    overflowY: "auto",
                                    border: `1px solid ${darkTheme.border}`,
                                    borderRadius: "6px",
                                    backgroundColor: darkTheme.surface,
                                }}
                            >
                                {savedUrls.map((item) => (
                                    <div
                                        key={item.id}
                                        style={{
                                            padding: "8px 10px",
                                            borderBottom: `1px solid ${darkTheme.border}`,
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                            backgroundColor: "transparent",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = darkTheme.surfaceVariant;
                                            e.currentTarget.style.transform = "translateX(2px)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = "transparent";
                                            e.currentTarget.style.transform = "translateX(0)";
                                        }}
                                        onClick={() => openUrl(item.url)}
                                    >
                                        <div
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: "11px",
                                                color: darkTheme.onSurface,
                                                marginBottom: "3px",
                                                wordBreak: "break-all",
                                            }}
                                        >
                                            🔗 {item.title}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "9px",
                                                color: darkTheme.primary,
                                                marginBottom: "3px",
                                                wordBreak: "break-all",
                                            }}
                                        >
                                            {item.url}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "9px",
                                                color: darkTheme.onSurfaceVariant,
                                            }}
                                        >
                                            🕐 {formatDate(item.timestamp)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Popup;
