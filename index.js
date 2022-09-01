require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.get('/', (req, res) => {
    return res.json({
        success: true,
        message: 'Server is running'
    })
});

app.listen(process.env.PORT ?? 3333, ()=>{
    console.log(`server is rining on port ${process.env.PORT ?? 3333}`)
})