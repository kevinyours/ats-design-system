const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
	env: {
		browser: true,
		node: false,
		es6: true,
		jest: false,
	},
	parserOptions: {
		project,
	},
	extends: ["prettier"].map(require.resolve),
	plugins: ["testing-library", "cypress", "prettier"],
	rules: {
		"cypress/no-assigning-return-values": "error",
		"cypress/no-unnecessary-waiting": "error",
		"cypress/assertion-before-screenshot": "warn",
		"cypress/no-force": "warn",
		"cypress/no-async-tests": "error",
		"cypress/no-pause": "error",
	},
};
