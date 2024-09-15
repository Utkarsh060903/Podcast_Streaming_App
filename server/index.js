import express from "express"
import dotenv from "dotenv"
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';

import authRoutes from './routes/authRoute.js';
import podcastsRoutes from './routes/podcastRoute.js';
import userRoutes from './routes/userRoute.js';


const app = express();

dotenv.config();

app.use(express.json());

const corsConfig = {
    credentials: true,
    origin: true,
};

app.use(cors(corsConfig));

const port = process.env.PORT || 8008

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("DB CNNECTED")
    }).catch((err) => {
        console.log(err)
    })
}

app.use("/api/auth", authRoutes)
app.use("/api/podcasts", podcastsRoutes)
app.use("/api/user", userRoutes)

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message
    })
})

app.listen(port, () => {
    console.log(`Connected to ${port}`)
    connectDB();
})