import {
	vitePlugin as remix,
	cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	server: {
		port: 2222,
	},

	css: {
		preprocessorOptions: {
			scss: {},
		},
	},

	ssr: {
		external: ["app/**/*.scss.d.ts"],
	},

	plugins: [
		remixCloudflareDevProxy(),
		remix({
			ssr: true,
		}),
		tsconfigPaths(),
	],
});
