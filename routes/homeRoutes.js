var fs = require("fs");
const express = require("express");
const productModel = require("../models/product");


const router = express.Router();


/////////////////////////////////////////////////////////

router.get("/", async (req, res) => {
    const products = await productModel.find({});

    try {
        //console.log(product);
        res.render("home", { products : products})
    } catch (error) {
        res.status(500).send(error);
    }
});

//////////////////////////////////////////
module.exports = router;