module.exports = {
	title: 'Unofficial Discord.js Command Guide',
	description: 'A guide to discord.js. This guide is more dedicated to certain commands which cannot be found elsewhere.',
	theme: 'yuu',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
		],
		sidebar: [
			{ title: 'Info', collapsable: false, children: ['/info/'] },
			{ title: 'Guide', collapsable: true, children: ['/guide/'] }
		],
	},
};