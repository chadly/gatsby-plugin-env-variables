module.exports = {
	env: {
		es6: true,
		node: true,
		jest: true
	},
	globals: {
		location: "off"
	},
	extends: ["@runly"],
	rules: {
		"import/no-commonjs": "off"
	}
};
