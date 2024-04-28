/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
    test: {
        include: ["~/vitest/*.{test,spec}.?(c|m)[jt]s?(x)"],
    },
});
