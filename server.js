import express from 'express'
import mongoose from 'mongoose'
import { Userregister,Userlogin } from './Controllers/user.js';
import bodyParser from 'express'
import bcrypt from 'bcryptjs'
import userRouter from './Routes/user.js'
import contactRouter from './Routes/contact.js'
import {config} from 'dotenv'
config({path:'.env'})
mongoose.connect(process.env.MONGO_URI, {
    dbName: "NodeJs_Mastery_Course"
}).then(console.log(`MongoDb Connected Successfully`)).catch((err) => console.log(err))
const app = express();
app.use(bodyParser.json())

app.use("/api/user",userRouter)
app.use("/api/contact",contactRouter)

const port = process.env.PORT ;
app.listen(port,console.log(`Server is running on port ${port}`))