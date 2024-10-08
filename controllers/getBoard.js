const database = require('../database/database');

// Get All Boards
exports.getBoard = async (req, res) => {
  try {
    const result = await database.query('SELECT * FROM board');
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ message: 'Get Items Fail: ' + error.message });
  }
};

// Get Board Detail
exports.getBoardDetail = async (req, res) => {
  // 함수 이름 수정
  const id = req.params.id;
  try {
    const result = await database.query('SELECT * FROM board WHERE writer = $1', [id]);
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ message: 'Get Item Detail Fail: ' + error.message });
  }
};
