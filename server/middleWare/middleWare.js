import  express  from 'express';
import cors from 'cors'
import session from 'express-session';
//create database connection
const middle_ware = express.Router()
middle_ware.use(express.json())
middle_ware.use(express.urlencoded({extended:true}))
middle_ware.use(cors({
    origin:"*",
    methods:"*",
    credentials:true
}))
//session configu
middle_ware.use(session({
    secret:"use your own key",
    saveUninitialized:true,
    resave:false,
    cookie:{
        maxAge: 60 * 60 * 1000
    }
}))

export default middle_ware