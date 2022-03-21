const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;



async function transaction() {
    let client;

    try {
    
        client = await MongoClient.connect("mongodb://webcom:webcom@127.0.0.1:27017/webcom", {
            useUnifiedTopology: true
        });

        const db = client.db("webcom");
        const docs = await db.collection("webcom")
                                .find({$and: [ {status: "active"},{"location.country_code":"JP"} ]})
                                .limit(2).toArray();

        return new Promise((resolve, reject) => {
            resolve(docs);
        });
    } catch (error) {
        console.log(error);
    } finally {
        client.close();
    }
};

transaction().then(result => {
    console.log(result);
    let docs = result;
    let list = [];
    for (var i = 0; i < docs.length; i++) {
 //    for ( var doc in docs ){
        let doc = docs[i];
        let imgUrl = "";
        let player = "";
        let id = "";
        try {
            id = doc.id;
            imgUrl = doc.image.daylight.thumbnail;
            player = doc.player.day.link;
        } catch (ex) {
            console.log(ex);
            continue;
        }

        let webComData = {
            id : id,
            imgUrl: imgUrl,
            player:player
        };

//        console.log(urldata);
        list.push(webComData);
//        let jurl = JSON.stringify(urldata);
//        var response = restClient('POST',
//            sendurl, { json: urldata }
 //       );

//        console.log(response.getBody('utf8'));

    }

});


