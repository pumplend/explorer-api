require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const modules = require("./modules/index")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors())

app.listen(process.env.PORT ?process.env.PORT: 20000 , async function() {
    console.log('main server start')
})

async function sendErr(res, err) {
    if (!err) {
        err = "unknow error"
    }
    return await res.status(500).send({
        "code": 500,
        "error": err
    })
}

/**
 * public function
 */

app.get('/', async function(req, res) {
    console.log("ping")
    res.status(200).send({
        "code": 200,
        "data": "alive"
    })
})

app.get('/ping', async function(req, res) {
    console.log("ping")
    res.status(200).send({
        "code": 200,
        "data": "pong"
    })
})

app.get('/explorer/positions', async function(req, res) {
    const ret = await modules.position.positionSearch(req)
    if(!ret)
    {
        sendErr(res,"Unknown Server Side Error")
    }
    res.status(200).send({
        "code": 200,
        "data": ret
    })
})

app.get('/explorer/actives', async function(req, res) {
    const ret = await modules.active.activeSearch(req)
    if(!ret)
    {
        sendErr(res,"Unknown Server Side Error")
    }
    res.status(200).send({
        "code": 200,
        "data": ret
    })
})

app.get('/explorer/liquidations', async function(req, res) {
    const ret = await modules.position.liquidationSearch(req)
    if(!ret)
    {
        sendErr(res,"Unknown Server Side Error")
    }
    res.status(200).send({
        "code": 200,
        "data": ret
    })
})
