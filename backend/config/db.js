import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { MONGO_USER, MONGO_PASS, MONGO_CLUSTER, MONGO_DB } = process.env;
const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_CLUSTER}/${MONGO_DB}?retryWrites=true&w=majority`;

export const connectDB = async () => {
       try {
         await mongoose.connect('mongodb+srv://sksahilnew2021:sksahilnew2021@taskmanagerdevelopers.k777y4g.mongodb.net/');
         console.log('DB CONNECTED');
       } catch (err) {
         console.error('DB CONNECTION ERROR:', err);
       }
};