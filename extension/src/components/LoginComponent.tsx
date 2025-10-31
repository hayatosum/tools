import React, { useState, useEffect } from "react";
import { authService } from "../firebase/authService";
import type { UserProfile } from "../firebase/authService";
import type { User } from "firebase/auth";

interface DarkTheme {
    background: string;
    surface: string;
    surfaceVariant: string;
    primary: string;
    error: string;
    success: string;
    border: string;
    onSurface: string;
    onSurfaceVariant: string;
}

interface LoginComponentProps {
    onLogin: (user: UserProfile) => void;
    onLogout: () => void;
    darkTheme: DarkTheme;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ onLogin, onLogout, darkTheme }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const [showEmailLogin, setShowEmailLogin] = useState<boolean>(false);
    const [showCreateAccount, setShowCreateAccount] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [displayName, setDisplayName] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const unsubscribe = authService.onAuthStateChanged(async (user) => {
            setUser(user);
            setIsAuthenticated(!!user);

            if (user) {
                try {
                    // ユーザープロフィールを取得してコールバックを呼ぶ
                    const userProfile: UserProfile = {
                        uid: user.uid,
                        email: user.email || "",
                        displayName: user.displayName || "Unknown User",
                        photoURL: user.photoURL || undefined,
                        createdAt: Date.now(),
                        lastLoginAt: Date.now(),
                    };
                    onLogin(userProfile);
                } catch (error) {
                    console.error("Error getting user profile:", error);
                }
            } else {
                onLogout();
            }
        });

        return () => unsubscribe();
    }, [onLogin, onLogout]);

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        setError("");

        try {
            await authService.signInWithGoogle();
        } catch (error) {
            setError(error instanceof Error ? error.message : "Google login failed");
        } finally {
            setIsLoading(false);
        }
    };

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            await authService.signInWithEmail(email, password);
            setShowEmailLogin(false);
            setEmail("");
            setPassword("");
        } catch (error) {
            setError(error instanceof Error ? error.message : "Email login failed");
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreateAccount = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            await authService.createAccount(email, password, displayName);
            setShowCreateAccount(false);
            setEmail("");
            setPassword("");
            setDisplayName("");
        } catch (error) {
            setError(error instanceof Error ? error.message : "Account creation failed");
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            await authService.signOut();
        } catch (error) {
            setError(error instanceof Error ? error.message : "Logout failed");
        } finally {
            setIsLoading(false);
        }
    };

    if (isAuthenticated && user) {
        return (
            <div
                style={{
                    padding: "12px",
                    marginBottom: "16px",
                    backgroundColor: darkTheme.surface,
                    borderRadius: "6px",
                    border: `1px solid ${darkTheme.border}`,
                }}
            >
                <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                    {user.photoURL && (
                        <img
                            src={user.photoURL}
                            alt="Profile"
                            style={{
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                marginRight: "8px",
                            }}
                        />
                    )}
                    <div>
                        <div
                            style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: darkTheme.onSurface,
                            }}
                        >
                            👋 {user.displayName || "Unknown User"}
                        </div>
                        <div
                            style={{
                                fontSize: "11px",
                                color: darkTheme.onSurfaceVariant,
                            }}
                        >
                            {user.email}
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    disabled={isLoading}
                    style={{
                        width: "100%",
                        padding: "6px 12px",
                        backgroundColor: darkTheme.error,
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "4px",
                        fontSize: "12px",
                        cursor: isLoading ? "not-allowed" : "pointer",
                        opacity: isLoading ? 0.6 : 1,
                    }}
                >
                    {isLoading ? "⏳ Logging out..." : "🚪 Logout"}
                </button>
            </div>
        );
    }

    return (
        <div
            style={{
                padding: "12px",
                marginBottom: "16px",
                backgroundColor: darkTheme.surface,
                borderRadius: "6px",
                border: `1px solid ${darkTheme.border}`,
            }}
        >
            <h3
                style={{
                    margin: "0 0 12px 0",
                    fontSize: "14px",
                    color: darkTheme.onSurface,
                    textAlign: "center",
                }}
            >
                🔐 Login to sync your data
            </h3>

            {error && (
                <div
                    style={{
                        padding: "8px",
                        marginBottom: "12px",
                        backgroundColor: `${darkTheme.error}20`,
                        border: `1px solid ${darkTheme.error}40`,
                        borderRadius: "4px",
                        fontSize: "11px",
                        color: darkTheme.error,
                    }}
                >
                    ❌ {error}
                </div>
            )}

            {!showEmailLogin && !showCreateAccount && (
                <div>
                    <button
                        onClick={handleGoogleLogin}
                        disabled={isLoading}
                        style={{
                            width: "100%",
                            padding: "8px 12px",
                            backgroundColor: "#4285f4",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "4px",
                            fontSize: "12px",
                            marginBottom: "8px",
                            cursor: isLoading ? "not-allowed" : "pointer",
                            opacity: isLoading ? 0.6 : 1,
                        }}
                    >
                        {isLoading ? "⏳ Signing in..." : "🚀 Sign in with Google"}
                    </button>

                    <div style={{ textAlign: "center", margin: "8px 0" }}>
                        <span style={{ fontSize: "11px", color: darkTheme.onSurfaceVariant }}>or</span>
                    </div>

                    <button
                        onClick={() => setShowEmailLogin(true)}
                        style={{
                            width: "100%",
                            padding: "6px 12px",
                            backgroundColor: darkTheme.surfaceVariant,
                            color: darkTheme.onSurface,
                            border: `1px solid ${darkTheme.border}`,
                            borderRadius: "4px",
                            fontSize: "11px",
                            marginBottom: "4px",
                            cursor: "pointer",
                        }}
                    >
                        📧 Email & Password
                    </button>

                    <button
                        onClick={() => setShowCreateAccount(true)}
                        style={{
                            width: "100%",
                            padding: "6px 12px",
                            backgroundColor: "transparent",
                            color: darkTheme.primary,
                            border: `1px solid ${darkTheme.primary}`,
                            borderRadius: "4px",
                            fontSize: "11px",
                            cursor: "pointer",
                        }}
                    >
                        ✨ Create Account
                    </button>
                </div>
            )}

            {showEmailLogin && (
                <form onSubmit={handleEmailLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "8px",
                            marginBottom: "8px",
                            backgroundColor: darkTheme.surfaceVariant,
                            color: darkTheme.onSurface,
                            border: `1px solid ${darkTheme.border}`,
                            borderRadius: "4px",
                            fontSize: "12px",
                        }}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "8px",
                            marginBottom: "8px",
                            backgroundColor: darkTheme.surfaceVariant,
                            color: darkTheme.onSurface,
                            border: `1px solid ${darkTheme.border}`,
                            borderRadius: "4px",
                            fontSize: "12px",
                        }}
                        required
                    />
                    <div style={{ display: "flex", gap: "8px" }}>
                        <button
                            type="submit"
                            disabled={isLoading}
                            style={{
                                flex: 1,
                                padding: "8px",
                                backgroundColor: darkTheme.primary,
                                color: "#ffffff",
                                border: "none",
                                borderRadius: "4px",
                                fontSize: "11px",
                                cursor: isLoading ? "not-allowed" : "pointer",
                                opacity: isLoading ? 0.6 : 1,
                            }}
                        >
                            {isLoading ? "⏳" : "🔑 Login"}
                        </button>
                        <button
                            type="button"
                            onClick={() => setShowEmailLogin(false)}
                            style={{
                                flex: 1,
                                padding: "8px",
                                backgroundColor: darkTheme.surfaceVariant,
                                color: darkTheme.onSurface,
                                border: `1px solid ${darkTheme.border}`,
                                borderRadius: "4px",
                                fontSize: "11px",
                                cursor: "pointer",
                            }}
                        >
                            ❌ Cancel
                        </button>
                    </div>
                </form>
            )}

            {showCreateAccount && (
                <form onSubmit={handleCreateAccount}>
                    <input
                        type="text"
                        placeholder="Display Name"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "8px",
                            marginBottom: "8px",
                            backgroundColor: darkTheme.surfaceVariant,
                            color: darkTheme.onSurface,
                            border: `1px solid ${darkTheme.border}`,
                            borderRadius: "4px",
                            fontSize: "12px",
                        }}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "8px",
                            marginBottom: "8px",
                            backgroundColor: darkTheme.surfaceVariant,
                            color: darkTheme.onSurface,
                            border: `1px solid ${darkTheme.border}`,
                            borderRadius: "4px",
                            fontSize: "12px",
                        }}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "8px",
                            marginBottom: "8px",
                            backgroundColor: darkTheme.surfaceVariant,
                            color: darkTheme.onSurface,
                            border: `1px solid ${darkTheme.border}`,
                            borderRadius: "4px",
                            fontSize: "12px",
                        }}
                        required
                    />
                    <div style={{ display: "flex", gap: "8px" }}>
                        <button
                            type="submit"
                            disabled={isLoading}
                            style={{
                                flex: 1,
                                padding: "8px",
                                backgroundColor: darkTheme.success,
                                color: "#ffffff",
                                border: "none",
                                borderRadius: "4px",
                                fontSize: "11px",
                                cursor: isLoading ? "not-allowed" : "pointer",
                                opacity: isLoading ? 0.6 : 1,
                            }}
                        >
                            {isLoading ? "⏳" : "✨ Create"}
                        </button>
                        <button
                            type="button"
                            onClick={() => setShowCreateAccount(false)}
                            style={{
                                flex: 1,
                                padding: "8px",
                                backgroundColor: darkTheme.surfaceVariant,
                                color: darkTheme.onSurface,
                                border: `1px solid ${darkTheme.border}`,
                                borderRadius: "4px",
                                fontSize: "11px",
                                cursor: "pointer",
                            }}
                        >
                            ❌ Cancel
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default LoginComponent;
