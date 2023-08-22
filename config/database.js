import mongoose from "mongoose";

mongoose.connect(process.env["DATABASE_URL"])
.then(()=>{
    console.log("conectado");
})
.catch(()=>{
    console.log("no conectado");
})