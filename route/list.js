//const { BIconSortNumericUpAlt } = require('bootstrap-vue');
var express = require('express');
var router = express.Router();

const dao = require('../util/dao');

const collectionName = 'webcom';


/* 
 * npx cross-env DEBUG=web-com-api:* npm start
 * http://localhost:<port>/list 
 * 
 */
router.get('/', function (req, res) {

    let code = req.query.countrycd;
    let lastid = req.query.lastid  == undefined ? "0" : req.query.lastid ;
    try {
        transaction(code,lastid).then(value => {
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


const transaction = async (countrycd,lastid) => {

    try {
       
        let list = [];
        let condition = [ {"status": "active"},{"location.country_code":countrycd},{"id":{$gt:lastid }}] ;
        let limit = 100;
        list = await dao.findList(collectionName,condition,limit);
     
        return (list);
    } catch (error) {
        console.log(error);
    } finally {
        // client.close();
    }
}

module.exports = router;