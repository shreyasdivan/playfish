"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET main pages
 */
var express = require("express");
var path = require("path");
var uuid4 = require("uuid/v4");
var util = require("../util");
var router = express.Router();
router.get('/*', function (req, res, next) {
    if (req.cookies.clientid === undefined) {
        res.cookie(util.cookiestring, uuid4());
    }
    next();
});
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});
router.get('/create', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/create.html'));
});
router.get('/join', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/join.html'));
});
exports.default = router;
//# sourceMappingURL=index.js.map