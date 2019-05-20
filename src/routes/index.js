const express = require('express');

const router = express.Router();
const { validators } = require('../middlewares');
const { list } = require('../controllers');

router.get('/', (req, res) => {
  res.send('Links List API\n');
});

router.post('/list', validators.validatePostList, list.postList);
router.get('/list/:uuid', validators.validateGetList, list.getList);

module.exports = router;
