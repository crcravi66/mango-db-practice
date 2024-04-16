const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/formStand')
.then(() => {
    console.log("mongo connection Open!!!")
})
.catch(err => {
    console.log("mongo connection error!!!")
    console.log(err)
})



app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/products', async (req, res)=>{
    const products =  await product.find({})
    res.render('products/index', { products })
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const products =  await product.findById(id)
    res.render('products/show', { products})
})

app.listen(3000, () => {
    console.log("App is listerning on port 3000");
})  