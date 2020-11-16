const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const apiPort = 4000;

const db = require('./database/db');

const userRouter = require('./routes/user');

async function main() {
    try {
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cors());
        app.use(bodyParser.json());

        app.get('/', (req, res) => {
            res.send("BeforeYouBid server running")
        });

        app.use('/user', userRouter);

        app.listen(apiPort, () => {
            console.log(`Server running on port ${apiPort}`)
        });
    }
    catch(e) {
        console.log("Server error: ", e);
    }
}

module.exports = main();