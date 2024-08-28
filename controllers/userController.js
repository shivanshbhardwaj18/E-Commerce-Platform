import userModel from '../models/userModel.js';

export const getAllUsers = async (req, res) => {
  try {
    // Fetch all users
    const users = await userModel.find();
    const count = await userModel.countDocuments();

    
    // Respond with user data
    res.status(200).json({
      success: true,
      users,
      count: count,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error fetching users',
      error: error.message,
    });
  }
};

export const getUserData_by_email = async (req, res) => {
    try {
        const { email } = req.body; // Get email from URL parameters
        
        // Fetch user by email
        const user = await userModel.findOne({ email });
    
        if (!user) {
          return res.status(404).json({
            success: false,
            message: 'User not found',
          });
        }
    
        // Respond with user data
        res.status(200).json({
          success: true,
          user,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: 'Error fetching user by email',
          error: error.message,
        });
      }
    };