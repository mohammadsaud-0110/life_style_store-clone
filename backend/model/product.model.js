const mongoose=require("mongoose")
mongoose.set("strictQuery",false)

const productSchema=mongoose.Schema({
    title:String,
    imageURL:String,
    description:String,
    price:Number,
    discount:Number,
    gender:String,
    category:String,
    subCategory:String,
    brand:String,
    color:String
},{
    versionKey:false
})

const ProductModel=new mongoose.model("product",productSchema)


module.exports={
    ProductModel
}