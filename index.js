require('babel-core/register');
require('babel-polyfill');

process.env.NODE_ENV === 'production' ? require('./server/prodServer') : require('./server/devServer');
