import dotenv from "dotenv"
import cors from "cors"
import express from "express"
dotenv.config()


const app = express();
app.use(cors()); // Restricts access from cross or different domains



app.get("/", (req, res) => {
    res.send("app is running")
})

export default app