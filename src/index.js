const express = require('express');
const connect = require('./config/database')

const app = express();

const TweetRepository = require('./repository/tweet-repository');

app.listen(3000, async () => {
    console.log('Server started');
    await connect();
    console.log('Mongo db connected');
    // const tweet = await Tweet.create({
    //     content: 'Third tweet',
    // });
    // const tweets = await Tweet.find({userEmail: 'yuvrajthapa692@gmail.com'});
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({content: 'With hooks now'});
    console.log(tweet);
})