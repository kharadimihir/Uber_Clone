import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import express from "express"
import connectDb from "./db/db.js"
import router from "./routes/user.router.js"
dotenv.config()



const app = express();
connectDb();

app.use(cors()); // Restricts access from cross or different domains
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", router);


app.get("/", (req, res) => {
    res.send("app is running")
})





export default app