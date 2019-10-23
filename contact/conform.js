const express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cor = require('cors');
const app = express();

var { Contact } = require('./conmodel');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mycon');
app.use(cor());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/con', function (req, res) {
    Contact.find().then(function (Data) {
        res.json(Data)
    }).catch(function (err) {
        res.status(500).json({
            message: "error"
        })
    })
})

app.post('/ccon', function (req, res) {
    console.log(req.body);
    var conData = req.body;
    var data = new Contact(conData);
    data.save().then(function (data1) {
        res.json({
            message: "success"
        })
    }).catch(function (err) {
        res.status(500).json({
            message: "error"
        })
    })
});
// app.put('/updateFilm/:id', function (req, res) {
//     Film.findById(req.params.id).then(function (filmData) {
//         res.json(filmData);
//         //filmData.phone=req.body.phone;
//         filmData.phone = 707070;
//         filmData.save().then(function (savedfilmData) {
//             console.log("success")
//         }).catch(function (err) {
//             console.log(err);
//         })
//     }).catch(function (err) {
//         console.log("error")
//     })
// })
// app.put('/delFilm/:id', function (res, req) {
//     Film.findByIdAndDelete(req.params.id).then(function (Data) {
//         res.json({
//             message: "deleted"
//         })
//     }).catch(function (err) {
//         res.json({
//             message: "error"
//         })
//     })
// })

app.listen(4000);