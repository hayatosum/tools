// pokepast.esページ用のcontent script
// ページのDOMからチーム情報を抽出する

interface PokemonData {
    name: string;
}

interface TeamData {
    teamName: string;
    author: string;
    pokemon: PokemonData[];
    url: string;
}

// DOMからチーム名を取得
function getTeamName(): string {
    const teamNameElement = document.querySelector("html > body > aside > h1");
    return teamNameElement?.textContent?.trim() || "";
}

// DOMから作者を取得
function getAuthor(): string {
    const authorElement = document.querySelector("html > body > aside > h2");
    return authorElement?.textContent?.trim() || "";
}

// DOMからポケモン名リストを取得
function getPokemonList(): PokemonData[] {
    const pokemonArticles = document.querySelectorAll("html > body > article");
    const pokemonList: PokemonData[] = [];

    pokemonArticles.forEach((article, index) => {
        if (index >= 6) return; // 最大6匹まで

        const nameElement = article.querySelector("pre > span");
        const pokemonName = nameElement?.textContent?.trim() || "";

        if (pokemonName) {
            pokemonList.push({ name: pokemonName });
        }
    });

    return pokemonList;
}

// チーム全体のデータを取得
function extractTeamData(): TeamData {
    return {
        teamName: getTeamName(),
        author: getAuthor(),
        pokemon: getPokemonList(),
        url: window.location.href,
    };
}

// background scriptからのメッセージを受信
chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
    if (request.action === "extractTeamData") {
        try {
            const teamData = extractTeamData();
            console.log("Extracted team data:", teamData);
            sendResponse({ success: true, data: teamData });
        } catch (error) {
            console.error("Error extracting team data:", error);
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            sendResponse({ success: false, error: errorMessage });
        }
    }
    return true; // 非同期レスポンスを有効にする
});

// ページ読み込み完了時にcontent scriptが動作していることをログ出力
console.log("PokePaste content script loaded on:", window.location.href);
