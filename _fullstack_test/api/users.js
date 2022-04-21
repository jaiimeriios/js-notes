import express from 'express';
const router = express.Router();
import { v4 as uuid } from 'uuid';

let users = [
    {
        firstName: 'Lorem',
        lastName: 'Ipsum',
        age: '20',
        id: uuid(),
    },
    {
        firstName: 'Dolor',
        lastName: 'Sit Amet',
        age: '30',
        id: uuid(),
    },
];

// Find all users
router.get('/', (req, res) => {
    res.send(users);
    // console.log(users)
});

// Find user details
router.get('/:id', (req, res) => {
    // console.log(req.params)
    // const { id } = req.params
    const foundUser = users.find((user) => {
        return user.id === req.params.id;
    });
    res.send(foundUser);
});

// Create a user
router.post('/', (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuid() });
    console.log('USER ADDED::', users);
});

// Delte user
router.delete('/:id', (req, res) => {
    // console.log('deleteee');
    // console.log(req.body);
    console.log(`user with id ${req.params.id} has been deleted`);
    users = users.filter((user) => {
        return user.id !== req.params.id;
    });
});

// Updated user
router.put('/:id', (req, res) => {
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => {
        return user.id === req.params.id;
    })
    if (firstName) {
        user.firstName = firstName;
        console.log(`First name has been updated to --${req.body.firstName}`)
    }
    if (lastName) {
        user.lastName = lastName;
        console.log(`Last name has been updated to --${req.body.lastName}`)
    }
    if (age) {
        user.age = age;
        console.log(`User Age has been updated to --${req.body.age}`)
    }
});

export default router;