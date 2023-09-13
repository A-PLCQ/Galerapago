const data = require('../data.json');
const express = require('express');

exports.getM = (req, res) => {
    res.json(data);
}
