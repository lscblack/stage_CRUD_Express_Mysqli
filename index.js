import  express  from 'express';
import middle_ware from './middleWare.js';
import stage from './endpoints.js';
const app = express()

app.use(middle_ware)
app.use("/users/",stage)
app.listen(8000,()=>{
    console.log("listening on port http://127.0.0.1:8000");
})