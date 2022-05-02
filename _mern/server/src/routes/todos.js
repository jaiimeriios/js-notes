import express from 'express';
const router = express.Router();
import chalk from 'chalk';

import TodosModel from '../models/todos.js'

// GET
router.get('/', async (req, res) => {
    const todo = await TodosModel.find({});
    try {
        res.status(200).json({
            status: 'Success',
            data: {
                todo,
            },
        });
        console.log( chalk.bgMagenta(" GET - ALL TODO:: "), todo)
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err,
        });
    }
});

router.get('/:id', async (req, res) => {

    const todo = await TodosModel.findById(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    try {
        res.status(200).json({
            status: 'Success',
            data: {
                todo,
            },
        });
        console.log( chalk.bgMagenta(" GET - TODO:: "), todo)
    } catch (err) {
        console.log(err);
    }
});

// POST
router.post('/', async (req, res) => {

    const todo = new TodosModel(req.body);

    try {
        await todo.save();
        res.status(201).json({
            status: 'Success',
            data: {
                todo,
            },
        });
        console.log( chalk.bgGreen(" POST - TODO:: "), todo)
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err,
        });
    }
});

// PATCH
router.patch('/:id', async (req, res) => {

    const todo = await TodosModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    try {
        res.status(200).json({
            status: 'Success',
            data: {
                todo,
            },
        });
        console.log( chalk.bgBlue(" PATCH - TODO:: "), todo)
    } catch (err) {
        console.log(err);
    }
});

// DELETE
router.delete('/:id', async (req, res) => {

    await TodosModel.findByIdAndDelete(req.params.id);

    try {
        res.status(204).json({
            status: 'Success',
            data: {},
        });
        console.log( chalk.bgRed(" DELETE - TODO:: "))
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err,
        });
    }
});

export default router;