const webpack = require('webpack')
const { resolve } = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin")
const MinifyPlugin = require("babel-minify-webpack-plugin")

const debug = process.env.NODE_ENV !== 'production'

let common = {
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: debug,
      minimize: !debug,
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      actions: resolve(__dirname, 'src/actions'),
      bindRedux: resolve(__dirname, 'src/common/bindRedux'),
      components: resolve(__dirname, 'src/components'),
      pages: resolve(__dirname, 'src/pages'),
      reducers: resolve(__dirname, 'src/reducers'),
    },
    plugins: [
      new DirectoryNamedWebpackPlugin()
    ]
  },
  context: resolve(__dirname, 'src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
          'sass-loader'
		],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
};

if(!debug) {
	common = merge(common, {
		plugins: [
			//new webpack.optimize.UglifyJsPlugin()
      new MinifyPlugin()
		],
		resolve: {
			alias: {
				//'react': 'react-lite',
				//'react-dom': 'react-lite'
			}
		},
	})
}

let main = merge({}, common, {
	entry: { main: './main.js' },
	target: 'electron-main',
	node: {
		__dirname: false,
		__filename: false
	},
	plugins: [
		new HtmlWebpackPlugin({
		  title: 'PinkCoin',
		  filename: 'app.html',
		  minify: {
			  collapseWhitespace: true
		  },
		  template: 'app.html',
		  inject: false,
		  script: debug ? 'http://localhost:8080/dist/render.js' : './render.js'
		})
	]
});

if(debug === true) {
	common = merge(common, {
		devtool: 'eval-source-map',
		plugins: [
			new webpack.NamedModulesPlugin()
		]
	})
}

let renderer = merge({}, common, {
	entry: debug ? {
		render: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/only-dev-server',
			'./render.js'
		]
	} : { render: './render.js' },
	target: 'electron-renderer',
	plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
})

module.exports = [
	main,
	renderer
]
