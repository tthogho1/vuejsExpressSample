const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;


async function getConnection() {
    var client = await MongoClient.connect("mongodb://webcom:webcom@127.0.0.1:27017/webcom", {
        useUnifiedTopology: true
    });

	return client;
}

var client = getConnection();
var db = client.db("webcom");

module.exports = {
	find: async function(collectionName,condition,limit) {
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

};