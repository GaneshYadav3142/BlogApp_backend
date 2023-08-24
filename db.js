const mongoose=require("mongoose")

const userData=async()=>{
    return    await mongoose.connect("mongodb+srv://Ganesh:Yadav@cluster0.z7f4ecg.mongodb.net/Blogging?retryWrites=true&w=majority")
   
}

module.exports=userData