const express = require("express")
const cors = require('cors')
const fs = require('fs')
const crypto = require("crypto");

const mongo = require('mongodb').MongoClient;

//App Instance
const app = express();
app.use(express.urlencoded({ limit: 2000000, extended: true }));
app.use(express.json({ limit: 2000000 }))

//Use Cors
app.use(cors())

//DB Connect
const uri = "mongodb://root:root@mongo"
// mongo.connect(uri, (err, client) => {
    // console.log(err)
    // console.log(client)


    // Health
    app.get('/health', (req, res) => {
        res.status(200).json({
            status: "ok",
            message: "Version 1.0"
        })
    })

    // Login [Mock] [Id: "sus", Password: "suwarika"]
    app.post('/login', (req, res) => {
        if (req.body.id && req.body.password) {
            // Auth Logic
            if (req.body.id === "sus" && req.body.password === "suwarika") {
                res.status(200).json({
                    token: "asdfghjkl"
                })
            } else {
                res.status(401).json({})
            }
        } else {
            res.status(401).json({})
        }
    })

    // Upload [AuthPartMock]
    app.post('/upload', (req, res) => {
        if (req.body.id && req.body.img && req.body.ocr) {
            res.status(200).json({
                status: 1
            })
        } else {
            res.status(401).json({})
        }
    })

    // App start
    app.listen('2222', () => {
        console.log("API Server Starting...")
    })
// })