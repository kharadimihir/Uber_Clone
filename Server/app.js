import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import express from "express"
import connectDb from "./db/db.js"
import userRoutes from "./routes/user.router.js"
import riderRoutes from "./routes/rider.routes.js"

dotenv.config()



const app = express();
connectDb();

app.use(cors()); // Restricts access from cross or different domains
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoutes);
app.use("/riders", riderRoutes)


app.get("/", (req, res) => {
    res.send("app is running")
})





export default app