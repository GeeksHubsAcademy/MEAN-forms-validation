const mongoose = require( 'mongoose' );
const atlasUrl = `mongodb+srv://david:mlbh4lVTqwfh7xOd@pelisdb-1n2la.mongodb.net/test?retryWrites=true&w=majority`
const devUrl = 'mongodb://localhost:27017/movies';
const url = process.env.NODE_ENV === "production" ? atlasUrl : devUrl;
mongoose.connect( url, { useNewUrlParser: true, useCreateIndex: true } )
    .then( () => console.log( 'conectado a mongoDB' ) )
    .catch( error => console.log( 'Error al conectar a MongoDB: ' + error ) )
