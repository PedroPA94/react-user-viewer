// eslint-disable-next-line no-undef
module.exports = {
	preset: "ts-jest/presets/js-with-ts",
	transform: {
		"^.+\\.(ts|tsx)?$": "ts-jest",
		"^.+\\.(js|jsx)$": "babel-jest",
	},
	moduleNameMapper: {
		"\\.(css|less)$": "<rootDir>/src/tests/mocks/styleMock.js",
	},
	testEnvironment: "jsdom",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};