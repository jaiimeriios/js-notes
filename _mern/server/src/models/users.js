import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
});

const UsersModel = mongoose.model('users', UsersSchema);

export default UsersModel;