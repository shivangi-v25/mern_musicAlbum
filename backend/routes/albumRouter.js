const express = require('express');
const { addAlbum, showAlbum, oneAlbum, editAlbum, deleteAlbum } = require('../controller/albumcontroller');
const router=express.Router()

router.post("/add",addAlbum)
router.get("/",showAlbum)
router.get("/:id",oneAlbum)
router.put("/edit/:id",editAlbum)
router.delete("/delete/:id",deleteAlbum)


// http://localhost:4000/add
// http://localhost:4000/edit/69a3e60125bf7a2013954253
// http://localhost:4000/delete/69a3e44ef3c3ed221403f3d2


module.exports=router