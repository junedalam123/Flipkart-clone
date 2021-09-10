const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
    id:String,
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    description:String,
    discount:String,
    tagline:String

})

const Products = mongoose.model("Product",ProductSchema)


module.exports = Products