const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
title: String,
description: String,
imageUrl:String, // New field for storing image URL
date: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Blog', blogSchema);

