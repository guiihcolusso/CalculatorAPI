const express = require('express');
const router = express();
const controller = require('./controller');


router.get('/sum/:num1/:num2', controller.sum);

router.get('/sub/:num1/:num2', controller.sub);

router.get('/mul/:num1/:num2', controller.mul);

router.get('/div/:num1/:num2', controller.div);


module.exports = router;