import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import dotenv from "dotenv";
import { workspaceDependencies } from "./dependencies.ts";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	// const { VITE_SENTRY_URL, VITE_SENTRY_TOKEN } = loadEnv(mode, process.cwd());

	return {
		optimizeDeps: {
			include: workspaceDependencies.filter((dep) => !dep.startsWith("@ats-")), // 최적화 적용안되는 위젯 디펜던시 제외
		},
		plugins: [
			react({
				tsDecorators: true,
				jsxImportSource: "@emotion/react",
				plugins: [["@swc/plugin-emotion", {}]],
			}),
			tsconfigPaths(),
		],
	};
});
