const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')

// Load env 
dotenv.config( { path: './config.env'})

const app = express();

//logging 
app.use(morgan('dev'))
app.use(cors())

// routes
app.use('/api', require('./routes/api'))

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`server running in ${process.env.NODE_ENV} mode on port ${port} `)
})