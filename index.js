const express = require("express");
const config = require("config");
const corsMiddleware = require("./middleware/cors.middleware");

const app = express();
const PORT = config.get("serverPort");

app.use(corsMiddleware);
app.use(express.json());

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log('serverStart')
        })
    } catch (e) {

    }
}

start()