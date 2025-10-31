import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                popup: resolve(__dirname, "index.html"),
                background: resolve(__dirname, "src/background/background.ts"),
                "pokepast-content": resolve(__dirname, "src/content/pokepast-content.ts"),
            },
            output: {
                entryFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "background") return "background.js";
                    if (chunkInfo.name === "pokepast-content") return "pokepast-content.js";
                    return "[name].js";
                },
            },
        },
        outDir: "dist",
        emptyOutDir: true,
    },
    publicDir: "public",
});
