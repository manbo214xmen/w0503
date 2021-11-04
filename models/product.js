const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
    ProID : {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    ProName : {
        type: String,
        required: true,
        trim: true,
    },
    Category : {
        type: String,
        required: true,
        trim: true,
    },
    ProDes : {
        type: String,
        default : "",
        trim: true,
    },
    Warranty : {
        type: Number,
        default : 0,
        validate: {
            validator: function(value) {
                return (value>0);
            },
            message: "Negative Bao Hanh !",
        },

    },
    Price : {
        type: Number,
        default : 0,
        validate: {
            validator: function(value) {
                return (value>0);
            },
            message: "Negative GIA BAN !",
        },

    },
    Manufacturer : {
        type: String,
        default : "",
        trim: true,
    },
    Year_Of_Manufacture: {
        type: Number,
        default : 0,
        validate: {
            validator: function(value) {
                return (value>0);
            },
            message: "Negative Bao Hanh !",
        },

    },
    Model : {
        type: String,
        default : "",
        trim: true,
        uppercase : true,
    },
    Img_link: {
        type: String,
        default : "",
        trim: true,
    },

});

const Product = mongoose.model("Product", ProductSchema,"Product");
module.exports = Product;