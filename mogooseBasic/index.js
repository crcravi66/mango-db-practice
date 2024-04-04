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

const Movie = mongoose.model('movie', movieSchema);
// const amadous = new Movie({title : 'Amedous', year : 1964, score : 9.2, rating:'R'});


// const newmovie = mongoose.model('movie2',movieSchema);
// const second = new movie({title : 'Amedous2', year : 1964, score : 9.2, rating:'R'});

Movie.insertMany([
    {title : "Amelie", year : 2001,score : 8.3, rating:'R' },
    {title : "Alien", year : 1979,score : 8.1, rating:'R' },
    {title : "The Iorn Gaint", year : 1999,score : 7.5, rating:'PG' },
    {title : "Stand by Me", year : 1986,score : 8.6, rating:'R' },
    {title : "Moonrise Kingdom", year : 2012,score : 7.3, rating:'R-13' }
])  
.then((data) => {
    console.log("its worked");
    console.log(data);
})