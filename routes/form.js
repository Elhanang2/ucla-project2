const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
    res.sendFile('test.html', {root: 'public'});
});

module.exports = router;