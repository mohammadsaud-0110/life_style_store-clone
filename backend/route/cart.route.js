const express=require("express")
const {CartModel}=require("../model/cart.model")
const cartRouter=express.Router()



cartRouter.get("/",async(req,res)=>{
    const cartitem= await CartModel.find({user:req.body.user})
    res.send(cartitem)
})
cartRouter.post("/addnew",async(req,res)=>{
    let title = req.body.title;
    let pro = await ProductModel.find({title})
    if(pro.length!==0 && pro[0].title == title){
        res.send({"msg":"Product already present"});
    }
    else{
        let newpro = new CartModel(req.body)
        await newpro.save();
        res.send({"msg":"Product Added"})
    }
})
cartRouter.patch("/update/:id",async(req,res)=>{
    const Id = req.params.id;
    const udata=req.body;
    try{
        await CartModel.findByIdAndUpdate({_id:Id},udata);
        res.send({"msg":"Cart Update"})
    }catch(err){
        res.send({"msg":"Something went wrong","Error":err})
    }
})

cartRouter.delete("/delete/:id",async(req,res)=>{
    let id=req.params.id;
    const cartitem= await CartModel.findByIdAndDelete(id)
    res.send({"msg":"Product removed from cart"})
})

module.exports={
    cartRouter
}