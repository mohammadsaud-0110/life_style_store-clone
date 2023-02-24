const express=require("express")
const {ProductModel}=require("../model/product.model")
const {CartModel}=require("../model/cart.model")
const productRouter=express.Router()

productRouter.get("/",(req,res)=>{
    res.send("Products")
})

productRouter.post("/addnew",async(req,res)=>{
    let title = req.body.title;
    let pro = await ProductModel.find({title})
    if(pro.length!==0 && pro[0].title == title){
        res.send({"msg":"Product already present"});
    }
    else{
        let newpro = new ProductModel(req.body)
        await newpro.save();
        res.send({"msg":"Product Added"})
    }
})


module.exports={
    productRouter
}