const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Marvel Comic API' })
})

// Routes
app.use('/api/characters', require('./routes/characterRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT} in ${process.env.NODE_ENV} mode`))