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
        required : true,
        min :0
    },
    onSale : {
        type : Boolean,
        default: false
    },
    catagories  :[String],
    qty: {
        online :{
            type :Number,
            default : 0
        },
        offline :{
            type :Number,
            default : 0
        }   
    },
    size :{
            type : String,
            enum :['s','m','l']
    }
})

productSchema.methods.toggleOnSale = function() {
   this.onSale = !this.onSale;
   return this.save();
}

productSchema.methods.addCategory = function (addcat){
    this.catagories.push(addcat)
    return this.save();
}

productSchema.statics.firsale = function(){
    return this.updateMany({},{price : 0, onSale : true })  
}
const product = mongoose.model('product', productSchema);

const findProduct = async () => {
    const foundProduct = await product.findOne({name : 'RTR Apache helmet'});
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    await foundProduct.addCategory('Outdoor')
    console.log(foundProduct);
} 
findProduct();
product.firsale().then(m => console.log(m)) 

// // const bike = new product({ name : 'RTR Apache', price : 100000, color : 'blue'});
// const bike = new product({ name : 'RTR Apache helmet', price : 1002, catagories: ['cycling', 'safety' ], size : 'm'});

// bike.save()
// .then((data) => {
//     console.log(`succes result  ${data}`)
// })
// .catch((err) => {
//     console.log(err);
// })
