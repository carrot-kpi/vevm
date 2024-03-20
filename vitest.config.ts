import { fileURLToPath } from "node:url";
import { mergeConfig, defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: "happy-dom",
            exclude: [...configDefaults.exclude],
            unstubEnvs: true,
            unstubGlobals: true,
            restoreMocks: true,
            root: fileURLToPath(new URL("./", import.meta.url)),
            server: {
                deps: {
                    inline: ["viem"],
                },
            },
        },
    }),
);
