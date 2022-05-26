const { User } = require('../../models');
const jwt = require('jsonwebtoken'); // for token authen
const config = require('../../config/config');
const crypto = require('crypto');

function jwtSignUser(user) {
    // Override the function who sign a user obj using jwt library to get back a token
    const THREE_HOUR = 60 * 60 * 24;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: THREE_HOUR
    });
}

module.exports = {
    /* Maybe switch to update later
    async register(req, res) {
        try {
            const newUser = {
                username: req.body.username,
                active_hash: "",
                salt: ""
            }
            newUser.salt = crypto.randomBytes(16).toString(`hex`)
            newUser.active_hash = crypto.pbkdf2Sync(req.body.password, newUser.salt,
                1000, 64, `sha512`).toString(`hex`)
            const user = await User.create(newUser)
            res.send(user)
        } catch (err) {
            res.status(400).send({ // send type error
                error: 'This username account is already in use.'
            })
        }
    }, */
    async signin(req, res) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({
                where: {
                    username: username
                }
            });
            if (!user) {
                return res.status(403).send({
                    error: 'Invalid credentials'
                });
            }
            const hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, `sha512`).toString(`hex`);
            const isPasswordValid = user.active_hash === hash;
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'Invalid credentials'
                });
            }
            const userJson = user.toJSON();
            res.send({
                user: {
                    id: user.id,
                    username: username
                },
                token: jwtSignUser(userJson)
            });
        } catch (err) {
            res.status(500).send({
                // send type error
                error: 'An error has occured trying to sign in'
            });
        }
    }
};
