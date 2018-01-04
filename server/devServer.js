import http from 'http'
import config from 'config'
import express from 'express'
import webpack from 'webpack'
import route from '../modules/route'
import webpackConfigDev from '../webpack.config.dev'
import webpackDevMiddleware from 'webpack-dev-middleware'


var app = express();

var compiler = webpack( webpackConfigDev );

app.use(webpackDevMiddleware(compiler, {
	publicPath: '/',
	watchOptions: {
		aggregateTimeout: 300,
		poll: true
	},
	stats: {
		colors: true
	},
	headers: { "X-Custom-Header": "yes" },
	serverSideRender: false
}));


app = route(app);
app.listen(config.get('port'), () => {
	console.log(`Server listen in ${config.get('port')} port`)
})
