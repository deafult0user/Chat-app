const express= require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const userRoutes=require("./routes/userRoutes");

const app=express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth",userRoutes)

mongoose.connect( "mongodb+srv://Satvik1769:IRONMAn17@devclan.0dqjiuu.mongodb.net/chat" , {
    // useNewUrlParser : true,
    // useUnifiedTopology: true,
}).then(()=>{
    console.log("DB connection successfully");
}).catch((err)=>{
    console.log(err.message);
});

const server = app.listen(5500, ()=>
    console.log('Server started on PORT ')
);


