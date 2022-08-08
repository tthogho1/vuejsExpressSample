var express = require('express');
var router = express.Router();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const collectionName = 'webcom';

/* 
 * npx cross-env DEBUG=web-com-api:* npm start
 * http://localhost:<port>/list 
 * g
 */
router.post('/', function (req, res) {

    let id = req.body.id   ;
    try {
        transaction(id).then(value => {
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


const transaction = async (webcamid) => {
    let client;

    try {

        client = await MongoClient.connect("mongodb://webcom:webcom@127.0.0.1:27017/webcom", {
            useUnifiedTopology: true
        });
       
        let db = client.db(collectionName);
        let list = [];
        //let docs = 
        let condition = [ {"status": "active"},{"id":webcamid}] ;

        await db.collection(collectionName)
        .find({$and: condition })
        .forEach(function (doc){

            let webComData = {
                id : doc.id,
                player: doc.player.day.link
            };
             
            list.unshift(webComData);
        });

        return (list);
    } catch (error) {
        console.log(error);
    } finally {
        client.close();

    }

}

module.exports = router;