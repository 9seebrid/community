const router = require('express').Router();
const { getBoard, getBoardDetail } = require('../controllers/getBoard');

router.get('/get_board', getBoard);
router.get('/get_board_user/:id', getBoardDetail);

module.exports = router;
