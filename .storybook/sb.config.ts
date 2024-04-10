import asg from "@takuma-ru/auto-story-generator";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	process.env = { ...process.env, ...env };

	return {
		// no Remix Vite plugin here
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use "app/assets/styles/variables.scss" as var;
						@use "app/assets/styles/mixins.scss" as mixin;
						@import "app/assets/styles/global.scss";
					`,
				},
			},
		},

		plugins: [
			tsconfigPaths(),
			asg.vite({
				preset: "react",
				imports: ["app/components/**/*.tsx"],
				isGenerateStoriesFileAtBuild: true,
			}),
		],
	};
});
