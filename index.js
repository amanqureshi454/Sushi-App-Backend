const express = require('express');
const mongoose = require('mongoose');
const Users = require('./SushiModel')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


//MIDDLEWARS
app.use(cors());
app.use(bodyParser.json())


//CONNECTION TO DB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected With DB');
    })
    .catch(() => {
        console.log("DB Is Not Connected");
    })

//ROUTES

app.post('/bookatable', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Create a new Users document
        const newUser = new Users({ name, email, message });

        // Save the document to MongoDB
        await newUser.save();

        res.status(200).json({
            status: 'success',
            message: 'Your data is Submitted Successfully',
            data: {
                user: newUser,
            },
        });
    } catch (err) {
        console.error('Failed to submit data', err);
        res.status(500).json({
            status: 'error',
            message: 'Failed to submit data',
        });
    }
});



const port = 4000;
app.listen(process.env.PORT || port, () => {
    console.log('Server is Running on 4000 port');
})