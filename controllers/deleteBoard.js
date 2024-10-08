const database = require('../database/database');

// Delete Board
exports.deleteBoard = async (req, res) => {
  const itemId = req.params.itemId;

  try {
    const result = await database.query('DELETE FROM board WHERE idx = $1', [itemId]);
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'No item found to delete' });
    }
    return res.status(200).json({ message: 'Task Deleted Successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Delete Items Fail: ' + error.message });
  }
};
