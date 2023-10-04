import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import federation from "@originjs/vite-plugin-federation";
import dotenv from "dotenv";
import { workspaceDependencies } from "./dependencies.ts";

dotenv.config();

export default defineConfig(({ mode }) => {
	const { VITE_SENTRY_URL, VITE_SENTRY_TOKEN } = loadEnv(mode, process.cwd());

	console.log(VITE_SENTRY_TOKEN, VITE_SENTRY_URL);

	return {
		resolve: {
			dedupe: ["react", "@emotion/react", "@emotion/styled"],
		},
		optimizeDeps: {
			include: workspaceDependencies.filter((dep) => !dep.startsWith("@ats-")), // 최적화 적용안되는 위젯 디펜던시 제외
		},
		build: {
			modulePreload: false,
			target: "esnext",
			minify: false,
			cssCodeSplit: false,
		},
		plugins: [
			react({
				tsDecorators: true,
				jsxImportSource: "@emotion/react",
				plugins: [["@swc/plugin-emotion", {}]],
			}),
			federation({
				name: "container",
				remotes: {
					interviewerApp: "http://localhost:3002/assets/remoteEntry.js",
				},
				shared: ["react", "react-dom"],
			}),
			tsconfigPaths(),
		],
	};
});
