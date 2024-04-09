import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import asg from "@takuma-ru/auto-story-generator";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	process.env = { ...process.env, ...env };

	return {
		// no Remix Vite plugin here
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
