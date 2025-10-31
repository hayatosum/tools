// Chrome拡張のバックグラウンドスクリプト
console.log("Background script loaded");

// 拡張機能がインストールされたときの処理
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});

// メッセージを受信したときの処理
chrome.runtime.onMessage.addListener((request: unknown, _sender: chrome.runtime.MessageSender, sendResponse: (response?: unknown) => void) => {
    console.log("Message received:", request);
    sendResponse({ result: "Background script responded" });
});
