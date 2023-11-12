const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.fsvaneg.mongodb.net/chat-app`, ()=> {
  console.log('connected to mongodb')
})
