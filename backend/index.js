require('./config/mongoose.js')
const express = require( 'express' );
const app = express();
const userRouter=require('./routes/users');
const port= process.env.PORT || 3001;
app.use( function ( req, res, next ) { // permite peticiones de otros dominios
    res.header( "Access-Control-Allow-Origin", "*" );
    res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
    res.header( "Access-Control-Allow-Methods", "GET, POST, PUT, PATCH" );
    res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authenticate" );
   
    next(); 
} );
app.use( express.json() ) // parsea el body de la petición a JSON
app.get('/',(req,res)=>res.send('hola'))
app.use('/users',userRouter);

app.listen( port, () => console.log( `servidor levantado en ${port}` ) )