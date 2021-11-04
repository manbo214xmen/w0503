const express = require("express");
const productModel = require("../models/product");

const router = express.Router();


/////////////////////////////////////////////////////////

router.get("/", async (req, res) => {
    const products = await productModel.find({});

    try {
        //console.log(products);
        res.render("products", { products : products});
        //res.end("");
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/create", async (req, res) => {
    res.render("product-create");
});

router.get("/view/:id", async (req, res) => {
    res.send("View " + req.params.id);
});

router.get("/edit/:id", async (req, res) => {
    res.send("Edit " + req.params.id);
});

router.post("/", async (req, res) => {
    const products = new productModel(req.body);

    try {
        //console.log(req.body);
        await  products.save();
        //res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
    return res.redirect('/products');
});

router.patch("/:id", async (req, res) => {

    try {
        console.log(req.params, req.body);
        const product = await  productModel.findByIdAndUpdate(req.params.id, req.body);
        await  productModel.save();
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/:id", async (req, res) => {

    try {
        console.log(req.params);
        const product = await  productModel.findByIdAndDelete(req.params.id);
        if (!product) res.status(404).send("NO item !");
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
});


//////////////////////////////////////////
module.exports = router;