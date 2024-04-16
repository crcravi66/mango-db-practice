const mongoose = require('mongoose');

const product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/formStand')
.then(() => {
    console.log("mongo connection Open!!!")
})
.catch(err => {
    console.log("mongo connection error!!!")
    console.log(err)
})

// const p = new product({
//     name : ' Ruby Grape Fruit',
//     price : 1.99,
//     category : 'fruit'
// })
// p.save().then(p => {
//     console.log(p);
// }).catch(err => {
//     console.log(err);
// })


const seedProducts = [
    {
        name : ' Fairy Eggplant',
        price : 1.00,
        category : 'vegetable' 
    },
    {
        name : ' Organic goddess Melon',
        price : 4.99,
        category : 'Fruit' 
    },
    {
        name : 'Oraganic mini seedless watermelon',
        price : 3.99,
        category : 'Fruit' 
    },
    {
        name : 'Oraganic Celery',
        price : 1.50,
        category : 'Vegetable' 
    },
    {
        name : 'Chocolate Whole Milk',
        price : 2.69,
        category : 'dairy' 
    },        
]
product.insertMany(seedProducts)
.then(res =>{
    console.log(res);
}).catch(err => {
    console.log(err);
})