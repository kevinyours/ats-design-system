import { defineConfig } from "cypress";
import {
	displayConfig,
	resolveBaseUrlByPort,
	resolveDownloadsFolder,
	resolveFixtureFolder,
	resolveSpecPattern,
	resolveSupportFile,
	resolveVideosFolder,
	setupNodeEvents,
} from "./shared.config";
import { SERVICE_PORT, SERVICE_NAME } from "@jobflex/constants";
import { PMS_ADMIN_USER_EMAIL, PMS_ADMIN_PASSWORD } from "../constants/account";

export default defineConfig({
	e2e: {
		baseUrl: resolveBaseUrlByPort(SERVICE_PORT.PMS),
		setupNodeEvents,
		supportFile: resolveSupportFile(SERVICE_NAME.PMS),
		specPattern: resolveSpecPattern(SERVICE_NAME.PMS),
		...displayConfig,
	},
	fixturesFolder: resolveFixtureFolder(SERVICE_NAME.PMS),
	downloadsFolder: resolveDownloadsFolder(SERVICE_NAME.PMS),
	videosFolder: resolveVideosFolder(SERVICE_NAME.PMS),
	watchForFileChanges: true,
	env: {
		[PMS_ADMIN_USER_EMAIL]: "phs_front@jainwon.com",
		[PMS_ADMIN_PASSWORD]: "alalalal12!@",
	},
});
