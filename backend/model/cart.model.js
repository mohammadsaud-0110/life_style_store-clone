const mongoose=require("mongoose")
mongoose.set("strictQuery",false)

const cartSchema=mongoose.Schema({
    title:String,
    imageURL:String,
    description:String,
    price:Number,
    discount:Number,
    gender:String,
    category:String,
    subCategory:String,
    brand:String,
    color:String,
    quantity:Number,
    user:String
},{
    versionKey:false
})

const CartModel=new mongoose.model("cart",cartSchema)


module.exports={
    CartModel
}