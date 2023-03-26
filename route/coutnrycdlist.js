//const { BIconSortNumericUpAlt } = require('bootstrap-vue');
var express = require('express');
var router = express.Router();

const dao = require('../util/dao');
const logger = require('../util/logger');
const collectionName = 'webcam';


/* 
 * npx cross-env DEBUG=web-com-api:* npm start
 * http://localhost:<port>/list 
 * 
 */
router.get('/', function (req, res) {
    logger.AppLogger.info('get coutnrycdlist');
    try {
        transaction().then(value => {
            res.header('Content-Type', 'application/json; charset=utf-8')
            res.send(value);

        });
    } catch (error) {
        logger.AppLogger.error(error);
    } finally {
        //
    }

});


const transaction = async () => {

    try {
       
        let list = [];
        list = await dao.coutryCdList(collectionName);

        return (list);
    } catch (error) {
        console.log(error);
    } finally {
        // client.close();
    }
}

module.exports = router;