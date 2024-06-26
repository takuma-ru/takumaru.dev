import {
	vitePlugin as remix,
	cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	server: {
		port: 2222,
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: "",
			},
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
		Icons({
			// https://icon-sets.iconify.design/
			autoInstall: true,
			compiler: "jsx",
			jsx: "react",
		}),
		tsconfigPaths(),
	],
});
