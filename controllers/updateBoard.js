const database = require('../database/database');

// Update Board
exports.updateBoard = async (req, res) => {
  const { title, content, update_time, idx } = req.body;
  try {
    const result = await database.query('UPDATE board SET title = $1, content = $2, update_time = $3 WHERE idx = $4', [
      title,
      content,
      update_time,
      idx,
    ]);
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'No item found to update' });
    }
    return res.status(200).json({ message: 'Board Updated Successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Update Completed Fail: ' + error.message });
  }
};
