import mongoose from "mongoose";

const dbConnect = ()=> {
    try 
    {
    const conn = mongoose.connect("mongodb+srv://khiladi2461997:babababa@cluster0.vt3yynj.mongodb.net/harvestly?retryWrites=true&w=majority")
    console.log('Database Connected Successfully');
   }
   catch(error){
    console.log('Database error');
   }
}

export default dbConnect;