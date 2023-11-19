import User from '../models/User.js';

export async function all(req, res) {
  try {
    const users = await User.findAll();

    return res.status(200).json({
      message: 'Users retrieved successfully',
      users
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something goes wrong"
    });
  }
}
