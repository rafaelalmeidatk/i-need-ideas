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
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
  })
);

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

app.listen(4000, () => console.log('Listening'));
