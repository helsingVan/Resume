var path = require('path');

module.exports = {
	// entry: {
	// 	css: [
	// 	'./static/css/reset.css',
	// 	'./static/css/common.css',
	// 	'./static/css/index.css'
	// 	]
	// },
	entry: [
		'./static/js/main.js',
		'./static/css/reset.css'
	],
	output: {
		path: path.resolve(__dirname,'./dist'),
		filename: 'bundle.js'
	}
}