const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

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

app.use(express.urlencoded({extended : true}))
app.use(methodOverride('_method')) 

const categories = ['fruit', 'vegetable','dairy'];

app.get('/products', async (req, res)=>{
    const products =  await product.find({})
    res.render('products/index', { products })
})

app.get('/products/new', (req, res) => {
    res.render('products/new', {categories})
})

app.post('/products', async  (req, res) => {
    const newProduct = new product(req.body);
    await newProduct.save();
    console.log(newProduct)
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const products =  await product.findById(id)
    res.render('products/show', { products})
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const editProduct = await product.findById(id);
    res.render('products/edit',{ editProduct, categories})
})

app.put('/products/:id', async (req, res) => {
   
    const { id } = req.params
    const products = await product.findByIdAndUpdate(id, req.body, {runValidators : true, new : true})
    res.redirect(`/products/${products._id}`);  
})

app.delete('/products/:id', async (req, res) => {
    const {id} = req.params;    
    const delProduct = await product.findByIdAndDelete(id);
    res.redirect('/products');

})

app.listen(5000, () => {
    console.log("App is listerning on port 5000");
})  