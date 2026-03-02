const mongoose = require('mongoose');
const conenctDb=()=>{
    mongoose.connect("mongodb://localhost:27017/music_album").then((result) => {
        console.log("db connected");
    }).catch((err) => {
        console.log(err);
        
    });
}

module.exports=conenctDb