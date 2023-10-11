import express from "express";
import cors from "cors";
import EmployeeRoute from "./Routes/chimeraRoute.js";
import connectDB from "./DataBase/dbConnect.js";
import dotenv from "dotenv"; // Change 'env' to 'dotenv'
import jobRoute from "./Routes/jobRoute.js"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Make sure you call connectDB() before defining routes that require database connections
connectDB();

app.get("/api/test", (req, res) => {
    res.send("Hello, how are you?");
});


app.use("/api/v1/employee", EmployeeRoute);
app.use("/api/v1/job", jobRoute);

const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`);
});
