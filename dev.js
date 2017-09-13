const webpack   = require('webpack');
const WebpackDevServer   = require('webpack-dev-server');
const path = require('path');
let config = require('./webpack.config');

const npmRun = require('npm-run');

let spawned = false;


let compiler_main = webpack(config[0]).run(()=>{
	let compiler = webpack(config[1]);
	compiler.plugin('done', ()=>{
		if(spawned === false) {
			spawned = true;
			npmRun('cross-env NODE_ENV=development electron .');
		}
	});
	let devServer = new WebpackDevServer(compiler, {
		hot: true,
		publicPath: '/dist/',
	}).listen(8080);
});