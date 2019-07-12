const mongoose=require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const crewMemberSchema=new mongoose.Schema({
    id:Number,
    imagePath:String,
    contributor:ObjectId
});

const crewMemberModel=mongoose.model('crewMember',crewMemberSchema);

module.exports=crewMemberModel;