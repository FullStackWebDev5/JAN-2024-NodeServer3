const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

const User =  mongoose.model('User', { // users
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    isGraduated: Boolean
})

const Child =  mongoose.model('Child', { // children
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    isGraduated: Boolean
})

const Lady =  mongoose.model('Lady', { //ladies
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    isGraduated: Boolean
})

app.get('/', (req, res) => {
  res.send('How to connect MongoDB to NodeJS Server?')
})

app.listen(process.env.PORT, () => {
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => console.log('Server is running :)'))
        .catch((error) => console.log(error))
})























/*
    # Database (DB): Permanent Storage
    - Two types:
        - 1. SQL (Relational DB)
            - Table and Row format
            - Eg: MySQL, PostgreSQL, SQLite, etc
        - 2. NoSQL (Non-Relational DB)
            - Collection and Document format
            - Eg: MongoDB, AWS DynamoDB, etc

    # Mongoose
      - ODM (Object Data Modeling) for MongoDB
*/