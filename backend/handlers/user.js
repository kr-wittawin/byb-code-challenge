const email = require("../service/email");
const User = require('../database/user');

const signup = async (req, res) => {
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

        var email_success = await email.sendEmailSafe(body.email);
        if (!email_success) {
            return res.status(500).json({
                e,
                message: 'Email service down. Please contact support or try again later',
            });
        }

        await newUser
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
            });

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