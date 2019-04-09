import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

//--------------------
// Server startup

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//--------------------
// Routes

app.use(routes);

//--------------------
// Start!

app.listen(4000, () => console.log('Listening'));
