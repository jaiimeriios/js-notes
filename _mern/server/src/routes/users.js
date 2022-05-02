import express from 'express';
const router = express.Router();
import chalk from 'chalk';

import UsersModel from '../models/users.js'

// GET
router.get('/', async (req, res) => {
    const user = await UsersModel.find({});
    try {
        res.status(200).json({
            status: 'Success',
            data: {
                user,
            },
        });
        console.log( chalk.bgMagenta(" GET - ALL USER:: "), user)
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err,
        });
    }
});

router.get('/:id', async (req, res) => {

    const user = await UsersModel.findById(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    try {
        res.status(200).json({
            status: 'Success',
            data: {
                user,
            },
        });
        console.log( chalk.bgMagenta(" GET - USER:: "), user)
    } catch (err) {
        console.log(err);
    }
});

// POST
router.post('/', async (req, res) => {

    const user = new UsersModel(req.body);

    try {
        await user.save();
        res.status(201).json({
            status: 'Success',
            data: {
                user,
            },
        });
        console.log( chalk.bgGreen(" POST - USER:: "), user)
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err,
        });
    }
});

// PATCH
router.patch('/:id', async (req, res) => {

    const user = await UsersModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    try {
        res.status(200).json({
            status: 'Success',
            data: {
                user,
            },
        });
        console.log( chalk.bgBlue(" PATCH - USER:: "), user)
    } catch (err) {
        console.log(err);
    }
});

// DELETE
router.delete('/:id', async (req, res) => {

    await UsersModel.findByIdAndDelete(req.params.id);

    try {
        res.status(204).json({
            status: 'Success',
            data: {},
        });
        console.log( chalk.bgRed(" DELETE - USER:: "))
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err,
        });
    }
});

export default router;