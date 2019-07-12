const router = require( 'express' ).Router();
const CrewMemberModel = require( '../models/CrewMember' );
const uploadPhoto=require('../config/multer');
const isAuthenticated=require('../middleware/authenticate')
router.post( '/add',isAuthenticated,uploadPhoto.single('photo'), ( req, res ) => {
    new CrewMemberModel({
        id:req.body.id,
        imagePath:req.file.filename,
        contributor:req.user._id
    }).save()
    .then(crewMember=>res.status(201).send(crewMember))
    .catch(error=>{
        console.log(error)
        res.status(500).send(error)
    });
} )

module.exports = router;
