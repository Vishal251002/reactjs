const mongoose =require ("mongoose")

const URI = "mongodb://0.0.0.0:27017/Internship ";

const connectDb = async () =>{
    try {
        await mongoose.connect(URI);
        console.log("Connection successfull")
    } catch (error) {
        console.error("database connection Failed")
        process.exit(0)
    }
}
module.exports =connectDb; 