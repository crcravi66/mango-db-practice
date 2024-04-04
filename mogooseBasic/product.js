const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then((data) => {
    console.log("its worked ")
    // console.log(data) 
})
.catch((err)=>{
    console.log("its Error")
    console.log(err)
})


const productSchema = new mongoose.Schema({
    name : {
            type : String,
            required : true
    },
    price : {
        type : Number,
        required : true
    }
})

const product = mongoose.model('product', productSchema);

const bike = new product({ name : 'RTR Apache', price : 100000, color : 'blue'});

bike.save()
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err);
})
