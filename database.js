
const dbConfig = {
    user : 'gq-user',
    pass : 'worldmap',
    url  : 'node10954-gq-gamma2.us.reclaim.cloud',
    // Use the url below to test locally
    //url  : 'localhost',
    database : 'geoquiz',
    connectionString: function(){
        return process.env.MONGODB_URI || 'mongodb://' + this.user + ':' +this.pass + '@' + this.url + '/' + this.database;
    }
};


module.exports = dbConfig;
