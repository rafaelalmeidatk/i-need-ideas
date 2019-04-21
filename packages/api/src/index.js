import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import routes from './routes';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

//--------------------
// Server startup

const app = express();
app.set('trust proxy', 1);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  // This should not be in an actual production app, it is basically
  // a hack to allow wildcard origin with credentials on
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
  );
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

//--------------------
// Session

app.use(
  session({
    secret: 'hey, shhh!',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: IS_PRODUCTION,
    },
  })
);

//--------------------
// Routes

app.use(routes);

//--------------------
// Start!

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
