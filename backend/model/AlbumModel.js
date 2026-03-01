const mongoose = require('mongoose');

const AlbumSchema=new mongoose.Schema({
    name:String,
    artist:String,
    genre:String,
    ReleaseYear:Number,
    Image:String
    
},{timestamps:true})

module.exports=mongoose.model("album",AlbumSchema)