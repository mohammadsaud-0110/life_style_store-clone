const mongoose=require("mongoose")
mongoose.set("strictQuery",false)

const favoriteSchema=mongoose.Schema({
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
    user:String
},{
    versionKey:false
})

const FavoriteModel=new mongoose.model("favorite",favoriteSchema)


module.exports={
    FavoriteModel
}