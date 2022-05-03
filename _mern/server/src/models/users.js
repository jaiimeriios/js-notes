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


// 'users' is the name of the collection on mongoDB
// 'UsersSchema' is the object that mirrors the collection

const UsersModel = mongoose.model('users', UsersSchema);

export default UsersModel;