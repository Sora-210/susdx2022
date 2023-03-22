const express = require("express")
const cors = require('cors')

//App Instance
const app = express();
app.use(express.urlencoded({ limit: 2000000, extended: true }));
app.use(express.json({ limit: 2000000 }))

//Use Cors
app.use(cors())

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


// App start
app.listen('2222', () => {
    console.log("API Server Starting...")
})