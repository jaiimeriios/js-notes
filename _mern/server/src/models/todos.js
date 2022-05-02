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

const TodosModel = mongoose.model('todos', TodosSchema);

export default TodosModel;