/// <reference types="vite/client" />

declare module "interviewerApp/App";

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
