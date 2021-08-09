const express = require("express");
const config = require("config");
const corsMiddleware = require("./middleware/cors.middleware");
const testAPIRouter = require("./routes/testAPI.routes");

const app = express();
const PORT = process.env.PORT;

app.use(corsMiddleware);
app.use(express.json());
app.use("/api", testAPIRouter);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log('serverStart')
        })
    } catch (e) {

    }
}

start()
