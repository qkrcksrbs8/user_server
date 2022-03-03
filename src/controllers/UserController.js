'use strict';
const express = require('express'); // npm i express
const router = express();

router.get('/test', (req, res) => {
    console.log('/user/test 호출');
    res.json({'code':'S001'});
})

module.exports = router;