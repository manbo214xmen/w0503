var fs = require("fs");
const express = require("express");
const productModel = require("../models/product");


const router = express.Router();


/////////////////////////////////////////////////////////
router.get("/", async (req, res) => {
    const products = await productModel.find({});

    res.writeHead(200);
        var data = fs.readFileSync("./views/about.hbs");
        res.end(data.toString());
});

//////////////////////////////////////////
module.exports = router;