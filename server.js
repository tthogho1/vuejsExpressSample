const express = require('express')
const app = express()

const list = require('./route/list');
const prevlist = require('./route/prevlist');
const getbyid = require('./route/getbyid');

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.use('/img', express.static(__dirname + '/dist/img/'));
app.use('/css', express.static(__dirname + '/dist/css/'));
app.use('/js', express.static(__dirname + '/dist/js/'));

app.use('/api/list',list);
app.use('/api/prev',prevlist)
app.use('/api/getbyid',getbyid)
app.get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))