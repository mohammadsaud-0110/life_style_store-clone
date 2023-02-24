const express=require("express")
const {FavoriteModel}=require("../model/favorite.model")
const favoriteRouter=express.Router()

favoriteRouter.get("/",async(req,res)=>{
    const favitem= await FavoriteModel.find({user:req.body.user})
    res.send(favitem)
})
favoriteRouter.post("/addnew",async(req,res)=>{
    let title = req.body.title;
    let pro = await FavoriteModel.find({title})
    if(pro.length!==0 && pro[0].title == title){
        res.send({"msg":"Product already present in Favorites"});
    }
    else{
        let newpro = new FavoriteModel(req.body)
        await newpro.save();
        res.send({"msg":"Product Added to Favorites"})
    }
})
favoriteRouter.delete("/delete/:id",async(req,res)=>{
    let id=req.params.id;
    await FavoriteModel.findByIdAndDelete(id)
    res.send({"msg":"Product removed from Favorites"})
})

module.exports={
    favoriteRouter
}