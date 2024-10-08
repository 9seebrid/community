const router = require('express').Router();
const { postBoard } = require('../controllers/postBoard');

router.post('/post_board', postBoard);

module.exports = router;
