import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack-config';

//init packages
const app = express();

//routes
app.get('/api', (req, res) => {
  res.json({'api': 'Hello world from API'});
});

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(webpackDevMiddleware(webpack(webpackConfig)));

//start
app.listen(app.get('port'), () => {
  console.log('server running...');
});
