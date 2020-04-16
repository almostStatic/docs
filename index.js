const { createApp, dev, build, eject } = require('vuepress');
const config = require('./docs/.vuepress/config.js')

async function devApp(options) {
	const app = createApp(options);
  await app.process();
  return app.dev();
};

devApp({
	sourceDir: process.cwd() + '/docs',
	theme: 'vuepress-theme-simple',
});