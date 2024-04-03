const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then((data) => {
    console.log (`connect : ${data}`)
})
.catch( (err) => {
    console.log(`error : ${err}`) 
})


const  movieSchema = new mongoose.Schema({
    title : String,
    year : Number,
    score : Number,
    rating : String
})

const movie = mongoose.model('movie', movieSchema);
const amadous = new movie({title : 'Amedous', year : 1964, score : 9.2, rating:'R'});


// const newmovie = mongoose.model('movie2',movieSchema);
// const second = new movie({title : 'Amedous2', year : 1964, score : 9.2, rating:'R'});
