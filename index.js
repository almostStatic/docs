const { createApp, dev, build, eject } = require('vuepress');
const config = require('./docs/.vuepress/config.js')

async function devApp(options) {
	const app = createApp(options);
  await app.process();
  return app.dev();
};
//    "docs:build": "vuepress build docs",		

devApp({
	sourceDir: process.cwd() + '/docs',
	theme: '@vuepress/theme-default',
});
// https://asadhum2005.github.io/docs/.