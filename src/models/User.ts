import mongoose, {Schema} from 'mongoose';

const User: Schema = new Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 15,
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 8
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 1024,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Users', User);