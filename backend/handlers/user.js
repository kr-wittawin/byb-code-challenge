const User = require('../database/user');

const signup = (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'User details not provided',
            });
        }

        const newUser = new User(body);

        if (!newUser) {
            return res.status(400).json({ 
                success: false, 
                error: "Create user error" 
            });
        }

        newUser
            .save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    id: newUser._id,
                    message: 'New user created',
                });
            })
            .catch(e => {
                return res.status(400).json({
                    e,
                    message: 'New user not created',
                });
            })
    }
    catch (e) {
        return res.status(500).json({
            e,
            message: 'Server error during signup process',
        });
    }
    
}

module.exports = {
    signup
};