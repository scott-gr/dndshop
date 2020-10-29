import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('MongoDB Atlas connected');
    } catch(err) {
        console.error(err.message);
        // exit process with failure
        process.exit(1);
    }
}

export default connectDB;