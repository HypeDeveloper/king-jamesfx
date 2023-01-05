const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const { errHandler } = require("./backend/middleware/errorMiddleware");
const { connectDB, connectDB_local } = require("./backend/config/db");
const port = process.env.PORT || 5000 

if (process.env.NODE_ENV === 'dev') {
    connectDB_local();

} else {
    connectDB();

}

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// routes start point
app.use('/api', require('./backend/routes'))

// serve Frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './frontend/dist')))
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, './', 'frontend','dist', 'index.html'))
    })
} 
else {
    app.get('/', (req, res) => {
        res.send('Set env to production')
    })
}
// create a Server and connect DB
app.listen(port, () => {
    console.log(`Server on port ${port}`);
})