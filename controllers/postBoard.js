const database = require('../database/database');

// Post Board
exports.postBoard = async (req, res) => {
  const { title, content, writer, view_cnt, insert_time, update_time, delete_time } = req.body;

  try {
    await database.query(
      'INSERT INTO board (title, content, writer, view_cnt, insert_time, update_time, delete_time) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [title, content, writer, view_cnt, insert_time, update_time, delete_time]
    );
    return res.status(201).json({ message: 'Task Created Successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Create Item Fail: ' + error.message });
  }
};
