/* eslint-disable @typescript-eslint/no-var-requires */
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const postcssImportUrl = require('postcss-import-url');
const path = require('path');

// forcefully change dir to src,
// cuz postcssImport doesn't respect the root prop in options for some reason
process.chdir(path.resolve('./src'));

module.exports = {
	plugins: [
		postcssImport({
			root: path.resolve('./src'),
		}),
		postcssImportUrl(),
		postcssPresetEnv(),
		cssnano(),
	],
};
