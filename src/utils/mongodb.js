import mongoose from "mongoose"

const connect = async () => {
    if (mongoose.connections[0].readyState) return;
    //  {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //     }
    try{
        await mongoose.connect(process.env.MONGO_URL)
    }catch(error){
        throw new Error("Error connecting to Mongoose")
    }
}

export default connect