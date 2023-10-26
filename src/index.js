//Import require modules
const express = require('express');
const hbs = require('hbs')
const path = require('path')
const logger = require('morgan')
require('colors')

//Import required files
const event = require('../src/Api/Events')

//assign express functions in app 
const app = express()

//Defain static file's path
const staticAssests = path.join(__dirname, '../public')
const partials = path.join(__dirname, '../template/partials')
const views = path.join(__dirname, '../template/views')


//Register hbs partials modules
hbs.registerPartials(partials);

//Integrate static files with hbs view engine
app.use(express.static(staticAssests))
app.set("views", views)
app.set("view engine", "hbs")

//implement morgan with dev option
app.use(logger('dev'))



//Response parsing to callback 
function cricket(req, res, next) {
    event(13, (err, rows) => {
        if (err) {
            return res.render('error', { msg: err.errorMsg })
        }
        req.CricketApi = rows.DATA[2]
        next();
    })
}

function hokey(req, res, next) {
    event(4, (err, rows) => {
        if (err) {
            return res.render('error', { msg: err.errorMsg })
        }
        req.HokeyApi = rows.DATA[1]
        next();

    })
}

function tableTannis(req, res, next) {

    event(25, (err, rows) => {
        if (err) {
            return res.render('error', { msg: err.errorMsg })
        }
        req.tableTannisApi = rows.DATA[1]
        next();
    })

}


//Routes 

app.get('/', tableTannis, cricket, hokey, (req, res) => {
    console.log("this is for test...")
    console.log("another log..")
    res.render('index', {
        Tpayload: req.tableTannisApi,
        Cpayload: req.CricketApi,
        Hpayload: req.HokeyApi,
        mname: 'Shubham Varneshiya'
    });
})

app.get('/about', (req, res) => {
    res.render('about', { mname: 'Shubham Varneshiya' })
})

app.get('/sports/:id', (req, res) => {
    const params = req.params.id;

    event(params, (err, rows) => {
        if (err) {
            return res.render('error', { msg: err.errorMsg })
        }
        res.render('result', { payload: rows.DATA, mname: 'Shubham Varneshiya' })
    })

})


// catch unhandle page

app.get('/about/*', (req, res) => {
    res.render('error', { msg: 'Resource not found!!' })
})

app.get('/*', (req, res) => {
    res.render('error', { msg: '404 Not found' })
})

//Listen the server
app.listen(8001, () => {
    console.log('Server is Running......'.yellow.bold)
})