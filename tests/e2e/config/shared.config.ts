import { resolve } from "path";
import * as dotenv from "dotenv";

const ip = require("ip");

export interface CustomPluginConfigOptions extends Cypress.PluginConfigOptions {
	examUrl: string;
}

function setupNodeEvents(
	on: Cypress.PluginEvents,
	config: CustomPluginConfigOptions,
) {
	dotenv.config();
	config.examUrl = process.env.PMS_EXAM_URL;
	require("cypress-localstorage-commands/plugin")(on, config);

	return config;
}

const resolveBaseUrlByPort = (port: number) => `http://${ip.address()}:${port}`;

const resolveSupportFile = (type: string) =>
	resolve(__dirname, `../cypress/support/${type}/e2e.{js,jsx,ts,tsx}`);

const resolveSpecPattern = (type: string) =>
	resolve(__dirname, `../cypress/e2e/${type}/**/*.cy.{js,jsx,ts,tsx}`);

const displayConfig = {
	viewportWidth: 1920,
	viewportHeight: 1080,
	waitForAnimations: true,
};

const resolveFixtureFolder = (type: string) =>
	resolve(__dirname, `../cypress/fixtures/${type}`);

const resolveDownloadsFolder = (type: string) =>
	resolve(__dirname, `../downloads/${type}`);

const resolveVideosFolder = (type: string) =>
	resolve(__dirname, `../videos/${type}`);

export {
	setupNodeEvents,
	resolveBaseUrlByPort,
	resolveSupportFile,
	resolveSpecPattern,
	resolveVideosFolder,
	resolveDownloadsFolder,
	resolveFixtureFolder,
	displayConfig,
};
