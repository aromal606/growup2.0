import express from 'express';
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv" 
import helmet from "helmet"
import morgan from 'morgan';
import dbConnection from './dataBaseConfig/dbConnection.js';

import authRoutes from "./routes/user/authRoutes.js"


const app = express();
dotenv.config()
const port = process.env.PORT || 8000;

dbConnection()

app.use(helmet())
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE','PUT'],
  credentials: 'true',
})
)  
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json({limit:"10mb"}))
app.use(express.urlencoded({extended:true}))
app.use(morgan("combined"))


// routes ------------

app.use('/api/auth',authRoutes)


app.get('/',(req, res) => {
     res.send("hiii");
});
app.listen(port, () => {
  console.log(`server start in  port ${port}`);
});   
