const express = require('express'); // npm i express
const router = express();
// api npm // npm i axios

const bodyParser = require("body-parser"); // npm i body-parser
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//테스트 라우터
router.get('/user/test', (req, res) => {
    res.json({'code':'S001'});
})

//포트 연결
router.listen(3001,()=>console.log(`http://localhost:3001`));