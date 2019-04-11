import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

//--------------------
// Server startup

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//--------------------
// Routes

app.use(routes);

//--------------------
// Start!

app.listen(4000, () => console.log('Listening'));
