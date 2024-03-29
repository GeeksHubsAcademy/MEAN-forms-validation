const router = require( 'express' ).Router();
const UserModel = require( '../models/User' );
const isAuthenticated = require( '../middleware/authenticate.js' );
const uploadAvatar = require( '../config/multer' );
router.post( '/register', async ( req, res ) => {
    try {
        const user = await new UserModel( {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        } ).save()
        const token = await user.generateAuthToken() //me espero a que me llegue el token generado y lo guardo en la variable token
        res.status( 201 ).send( {
            info: "User successfully created",
            user,
            token // envio el token generado al frontend
        } )
    } catch ( error ) {
        console.log( error );
        res.status( 400 ).send( error )
    }
} );

router.get( '/info', isAuthenticated, ( req, res ) => res.send( req.user ) )

router.get( '/all', async ( req, res ) => {
    try {
        const users = await UserModel.find( {} )
        res.status( 200 ).send( users )
    } catch ( error ) {
        console.log( error )
        res.status( 500 ).send( error )
    }
} );
router.post( '/login', async ( req, res ) => {
    try {
        const user = await UserModel.findOne( {
            email: req.body.email,
            password: req.body.password
        } )
        if ( !user ) return res.status( 400 ).send( 'wrong crendentials' )
        res.send( { info: 'Welcome back', user } )
    } catch ( error ) {
        res.status( 500 ).send( error )
    }
} );

router.patch( '/updateProfile', isAuthenticated,uploadAvatar.single('avatar'), async ( req, res ) => {
    try {
        const user = await UserModel.findByIdAndUpdate( req.user._id, {
            ...req.body,
            imagePath: req.file.filename //añadimos al campo imagePath el filename que devuelve multer
        }, { new: true, useFindAndModify: false } )
        res.send( user )
    } catch ( error ) {
        console.log(error)
        res.status( 500 ).send( error )
    }
} )
router.get( '/like/:idMovie', isAuthenticated, async ( req, res ) => {
    try {
        const user = await UserModel.findByIdAndUpdate( req.user._id, {
            $push: { likes: Number( req.params.idMovie ) }
        }, { new: true } )
        res.send( user )
    } catch ( error ) {
        console.log( error )
        res.status( 500 ).send( error )
    }
} )

module.exports = router;
