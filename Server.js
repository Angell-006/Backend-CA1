const express = require('express');
const app = express();
const port = 3010;

const dotenv = require('dotenv');
dotenv.config();


app.post('/signup', async (req, res) => {
    const { username, email, password, dateOfBirth } = req.body;

    if (!username || !email || !password || !dateOfBirth) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newUser = new User({
        username,
        email,
        password ,
        dateOfBirth
    });

    try {
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port https://localhost:${port}`);
});
