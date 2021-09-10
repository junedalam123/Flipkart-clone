const Products = require('./constants/Products')
const Product = require("./Model/ProductsSchema")
const defaultData = async () =>{
    try{
         await Product.deleteMany({})
         await Product.insertMany(Products);
         console.log("data imported successfully")
    }catch(error){
        console.log("Error", error.meassge);
    }
}

module.exports  = defaultData