var express = require('express');
var router = express.Router();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const collectionName = 'webcom';

/* 
 * npx cross-env DEBUG=web-com-api:* npm start
 * http://localhost:<port>/list 
 * 
 */
router.get('/', function (req, res) {

    let code = req.query.countrycd;
    try {
        transaction(code).then(value => {
            res.header('Content-Type', 'application/json; charset=utf-8')
         //   res.header("Access-Control-Allow-Origin", "*");
          //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           // res.header('Content-Type', 'text/plain; charset=utf-8')
            res.send(value);

        });
    } catch (error) {
        console.log(error);
    } finally {
        //
    }

});


const transaction = async (countrycd) => {
    let client;

    try {

        client = await MongoClient.connect("mongodb://webcom:webcom@127.0.0.1:27017/webcom", {
            useUnifiedTopology: true
        });
       
        let db = client.db(collectionName);
        let list = [];
        //let docs = 
        await db.collection(collectionName)
        .find({$and: [ {status: "active"},{"location.country_code":countrycd} ]})
        .sort({"id":1}).limit(100).forEach(function (doc){

            let webComData = {
                id : doc.id,
                thumbnail: doc.image.daylight.thumbnail,
                player: doc.player.day.link
            };
             
            list.push(webComData);
        });

        console.log(list);

        return (list);
    } catch (error) {
        console.log(error);
    } finally {
        client.close();

    }

}

module.exports = router;