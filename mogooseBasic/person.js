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


const personSchema = new mongoose.Schema({
    first : String,
    last : String
}) 

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})
personSchema.pre('save', async function() {
    this.first = 'virat';
    this.last = 'kholi';
    console.log("About to Save!!!");
})
personSchema.post('save', async function() {
    console.log("Just Save!!!");
})

const person = mongoose.model('person', personSchema)
// const userName3 = new person({first: 'Arun',last : 'pandi'})

// userName3.save()
// console.log(userName3.fullname)
