const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const bcryptjs = require('bcryptjs');
require('dotenv/config');


const app = express();

mongoose.connect('mongodb+srv://ldasilva:ldasilva@omnistack-axwe1.mongodb.net/emTeam?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false}, () => console.log('MongoDB Connected'));

app.use(cors());
app.use(express.json());
app.use(routes.openRoutes);

console.log('This is the new message before exiting the app');

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

process.exit();

module.exports = app;