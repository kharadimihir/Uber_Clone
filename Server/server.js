import app from "./app.js";
import dotenv from "dotenv"
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log(`App is listing on ${PORT}`);
    console.log("App is running");
})