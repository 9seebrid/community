const router = require('express').Router();
const { updateBoard } = require('../controllers/updateBoard');

router.patch('/update_board', updateBoard);

module.exports = router;
