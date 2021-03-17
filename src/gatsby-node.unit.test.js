const { onCreateWebpackConfig } = require("./gatsby-node");

describe("GatsbyNode", () => {
	describe("When using the old API configuration", () => {
		it("notifies the developer so they can update their gatsby-config", () => {
			const oldOptions = {
				whitelist: ["MY_VAR", "MY_OTHER_VAR"]
			};
			expect(() => {
				onCreateWebpackConfig({}, oldOptions);
			}).toThrowError(
				"Please update your gatsby-config and replace whitelist with allowList"
			);
		});
	});

	describe("When using the new API configuration", () => {
		it("does not throw an error", () => {
			const newOptions = {
				allowList: ["MY_VAR", "MY_OTHER_VAR"]
			};
			expect(() => {
				onCreateWebpackConfig({}, newOptions);
			}).not.toThrowError(
				"Please update your gatsby-config and replace whitelist with allowList"
			);
		});
	});
});
