require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const goalRouter = require('./routes/goalRouter')


//middlewares
app.use(express.json())
app.use(cors())
// console.log('okay');


//routes
app.get("/",(req,res)=> {
    res.status(200).json({ message:'Welcome to Goals API'})
})
app.use("/api/goals", goalRouter)

//error-route
app.use((req,res)=> {
    res.status(404).json({message: 'Resource Not Found'})
})


//database connection and server listening


const startServer = async () => {
    try {
        // console.log('here');
        await mongoose.connect(process.env.MONGO_URL, {dbName: "goalServer"})
        app.listen(port,()=> {
            console.log(`Server running on port: ${port}...`);
        })
        
    } catch (error) {
        console.log(error);
    }
}
startServer()