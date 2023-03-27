const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/curdtask')
  .then(() => console.log('Connected!'));

  const mongodb = mongoose.connection

  mongodb.on('open',()=>{console.log("mongodb connection is successful");})