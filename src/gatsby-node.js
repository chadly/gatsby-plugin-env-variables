exports.onCreateWebpackConfig = ({ actions, plugins }, options) => {
	const { allowList, whitelist } = options || {};

	if (whitelist) {
		throw new Error(
			"Please update your gatsby-config and replace whitelist with allowList"
		);
	}

	if (!allowList) return;

	const varobj = Object.keys(process.env).reduce((acc, key) => {
		if (allowList.indexOf(key) >= 0) {
			acc[`process.env.${key}`] = JSON.stringify(process.env[key]);
		}
		return acc;
	}, {});

	let pluginsToAdd;
	if (Object.keys(varobj).length) {
		pluginsToAdd = [plugins.define(varobj)];
	}

	actions.setWebpackConfig({ plugins: pluginsToAdd });
};
