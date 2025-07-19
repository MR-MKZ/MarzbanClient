import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["lib/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    tsconfig: "./tsconfig.json",
    splitting: false,
    sourcemap: false,
    minify: true,
    treeshake: true,
    clean: true,
    skipNodeModulesBundle: true,
    external: ["axios"]
});