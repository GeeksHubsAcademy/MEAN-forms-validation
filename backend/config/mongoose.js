const mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost:27017/movies', { useNewUrlParser: true, useCreateIndex:true } )
.then( () => console.log( 'conectado a mongoDB' ) )
.catch(error=>console.log('Error al conectar a MongoDB: '+error))