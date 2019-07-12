const mongoose=require('mongoose');

const crewMemberSchema=new mongoose.Schema({
    id:Number,
    imagePath:String
});

const crewMemberModel=mongoose.model('crewMember',crewMemberSchema);

module.exports=crewMemberModel;