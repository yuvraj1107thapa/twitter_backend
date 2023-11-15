const { TweetRepository } = requre('../repository/index');

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
    }
    
    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9]+/g); // this regex extracts hashtags
        tags == tags.map((tag) => tag.substring(1));
        const tweet = await this.TweetRepository.create(data);

        // TODO: create hashtags and add here
        /**
         * 1. Bulcreate in mongoose
         * 2. Filter title of hashtag based on multiple tags
         * 3. How to add tweet id inside all the hashtags
         */
        
        return tweet;
    }
}

module.exports = TweetService;