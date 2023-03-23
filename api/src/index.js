const express = require("express")
const cors = require('cors')
const fs = require('fs')
const crypto = require("crypto");

// db connect
const mongoose = require('mongoose')
const uri = "mongodb://root:root@mongo:27017"

async () => {
    await mongoose.connect(uri)
}

// express instance
const app = express();
app.use(express.urlencoded({ limit: 2000000, extended: true }));
app.use(express.json({ limit: 2000000 }))

// Use Cors
app.use(cors())

//// Router
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
        const data = req.body.img
        fs.writeFile("/work/api/img/" + crypto.randomUUID() + ".png", data, {encoding: 'base64'}, (err) => {
            console.log(err)
        })
        res.status(200).json({
            status: 1
        })
    } else {
        res.status(401).json({})
    }
})

app.set("view engine", "ejs")
app.get("/doc", (req, res) => {
    const th = ['摘要', '数量', '単位', '単価', '金額']
    const data = {
        company: "株式会社テスト",
        id: "123456789",
        date: "2023/03/24",
        title: "テスト発注",
        promise: "2023/04/01",
        terms: "月末締翌月末払",
        tel: "03-0000-0000",
        price: "154,000",
        person: "諏訪理科 太朗",
        customer: {
            name: "公立諏訪東京理科大学",
            post: "〒391-0292",
            address1: "長野県茅野市豊平 5000-1",
            address2: "",
        },
        tableHeader: th,
        items: [
            [
                "サンプル1",
                "1,000",
                "10",
                "個",
                "10,000",
            ],
            [
                "サンプル2",
                "10,000",
                "1",
                "枚",
                "10,000",
            ],
            [
                "サンプル3",
                "10,000",
                "1",
                "個",
                "10,000",
            ],
            [
                "サンプル4",
                "5,000",
                "2",
                "本",
                "10,000",
            ],
            [
                "サンプル5",
                "10,000",
                "1",
                "個",
                "10,000",
            ],
            [
                "サンプル6",
                "2,500",
                "4",
                "本",
                "10,000",
            ],
            [
                "サンプル7",
                "4,000",
                "3",
                "個",
                "12,000",
            ],
            [
                "サンプル8",
                "4,000",
                "2",
                "枚",
                "8,000",
            ],
            [
                "サンプル9",
                "2,000",
                "5",
                "ロット",
                "10,000",
            ],
            [
                "サンプル10",
                "1,000",
                "10",
                "個",
                "10,000",
            ],
            [
                "サンプル11",
                "3,000",
                "3",
                "枚",
                "10,000",
            ],
            [
                "サンプル12",
                "1,000",
                "1",
                "個",
                "1,000",
            ],
            [
                "サンプル13",
                "6,000",
                "2",
                "本",
                "8,000",
            ],
            [
                "サンプル14",
                "2,000",
                "6",
                "ケース",
                "12,000",
            ]
        ],
        subtotal: "140,000",
        tax: "14,000",
        note: "特になし",
        cols: th.length
    }
    res.render("../format/12345.ejs", data)
})


// API Server Start
app.listen('2222', () => {
    console.log("API Server Starting...")
})
