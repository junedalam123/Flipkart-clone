const express = require("express")
const route = express.Router();
const {userSignup,userLoginIn} = require("../controller/user-controller")
const {getProducts,getProductById} = require("../controller/product-controller")

route.post("/signup",userSignup)
route.post("/login",userLoginIn)

route.get("/products",getProducts);

route.get("/product/:id",getProductById);


module.exports = route