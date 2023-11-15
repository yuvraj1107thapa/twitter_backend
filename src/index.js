const express = require('express');
const connect = require('./config/database')

const app = express();

const Tweet = require('./models/tweet');

app.listen(3000, async () => {
    console.log('Server started');
    await connect();
    console.log('Mongo db connected');
    const tweet = await Tweet.find({
        content: ["First tweet"]
    })
    console.log(tweet);
})