import mongoose from 'mongoose';

const TodosSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    important: {
        type: Boolean,
        required: true,
    },
});


// 'todos' is the name of the collection on mongoDB
// 'TodosSchema' is the object that mirrors the collection
 
const TodosModel = mongoose.model('todos', TodosSchema);

export default TodosModel;