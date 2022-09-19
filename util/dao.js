const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

var db;

async function getConnection() {
    var client = await MongoClient.connect("mongodb://webcom:webcom@127.0.0.1:27017/webcom", {
        useUnifiedTopology: true
    });

    db = client.db("webcom");
}

getConnection().then(console.log("connected"));

module.exports = {
	findList: async function(collectionName,condition,limit) {
        let list = [];
        await db.collection(collectionName)
        .find({$and: condition })
        .sort({"id":1}).limit(limit).forEach(function (doc){

            let webComData = {
                id : doc.id,
                thumbnail: doc.image.daylight.thumbnail,
                player: doc.player.day.link,
                latitude: doc.location.latitude,
                longitude: doc.location.longitude 
            };
            list.push(webComData);
        });
        
        return (list);
	},

    prevList: async function(collectionName,condition,limit) {
        let list = [];
        await db.collection(collectionName)
        .find({$and: condition })
        .sort({"id":-1}).limit(limit).forEach(function (doc){

            let webComData = {
                id : doc.id,
                thumbnail: doc.image.daylight.thumbnail,
                player: doc.player.day.link
            };
             
            list.unshift(webComData);
        });

        // console.log(list);

        return (list);
    },
};