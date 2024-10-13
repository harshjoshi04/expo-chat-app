import mongoose from 'mongoose';

const connectionDb = async ()=>{
    try {
        await mongoose.connect(process.env.DB_CONFIG);
        console.log("Connection successfully ! ")
    } catch (err) {
            console.log("Connection went wrong !")
    }
}


export default connectionDb;