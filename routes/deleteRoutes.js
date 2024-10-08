const router = require('express').Router();
const { deleteBoard } = require('../controllers/deleteBoard');

router.delete('/delete_board/:itemId', deleteBoard);

module.exports = router;
