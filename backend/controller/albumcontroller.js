const AlbumModel = require("../model/AlbumModel");

const addAlbum=async(req,resp)=>{
    try {
        const album_post =await AlbumModel.create(req.body)
        resp.json(album_post)

    } catch (error) {
        console.log(error);
        
    }
}
const showAlbum=async(req,resp)=>{
    try {
        const allAlbum=await AlbumModel.find()
        if (allAlbum !== 0) {
            resp.json(allAlbum)
        }
        

    } catch (error) {
        console.log(error);
        
    }
}
const oneAlbum=async(req,resp)=>{
    try {
        const data= await AlbumModel.findById(req.params.id)
         if (data !==0) {
            resp.json(data)
        }
        

    } catch (error) {
        console.log(error);
        
    }
}
const editAlbum=async(req,resp)=>{
    try {
        console.log(req.body);
    const data =await AlbumModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        resp.json(data)
    } catch (error) {
        console.log(error);
        
    }
}
const deleteAlbum=async(req,resp)=>{
    try {
      const data =await AlbumModel.findByIdAndDelete(req.params.id)
        // resp.json(data)  
    } catch (error) {
        console.log(error);
        
    }
}
module.exports={addAlbum,showAlbum,oneAlbum,editAlbum,deleteAlbum}