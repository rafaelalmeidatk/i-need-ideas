import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

//--------------------
// Server startup

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(
//   cors({
//     origin: ['https://i-need-ideas.herokuapp.com/'],
//     methods: ['GET', 'POST'],
//     credentials: true
//   })
// );

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  console.log('the origin is ' + req.headers.origin);
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
      secure: false
    }
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
