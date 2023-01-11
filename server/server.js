const express = require('express');
const cors = require("cors");
const apiRouter = require('./routes')

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/users', apiRouter)

app.listen(process.env.PORT || '3000', () => {

    console.log(`Server is running on port: ${process.env.PORT || '3000'}`);

})