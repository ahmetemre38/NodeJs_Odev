const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// middlewares
const logger = require('./src/middlewares/logger');
const auth = require('./src/middlewares/auth');

// app.use(logger);

//db Config
const db = process.env.MongoURI;
mongoose.connect(db, { useNewUrlParser:true, useUnifiedTopology:true })
    .then(console.log('MongoDB connected'))
    .catch(err => { console.log(err) });

// routing section
const usersRoutes = require('./src/routes/usersRoutes');
const todosRoutes = require('./src/routes/todosRoutes');

//app.use('/users', auth, logger, usersRoutes);
app.use('/users', usersRoutes);
app.use('/todos', todosRoutes);

// app.use((req, res, next) => {
//     const corsWhitelist = [
//         'http://localhost:3000',
//         'https://127.0.0.1:3000'
//     ];
//     if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
//         res.header('Access-Control-Allow-Origin', req.headers.origin);
//         res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     }
//     next();
// });

app.listen(PORT, console.log('server 3000 portunda calisiyor.'));