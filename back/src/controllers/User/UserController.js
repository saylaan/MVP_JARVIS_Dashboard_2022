const { User } = require('../../models');
const crypto = require('crypto');

module.exports = {
    async index(req, res) {
        try {
            let users = null;
            const search = req.query.search;
            if (search) {
                users = await User.findAll({
                    where: {
                        username: search
                    }
                });
            } else {
                users = await User.findAll({
                    limit: 100
                });
            }
            res.send(users);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to fetch all the User'
            });
        }
    },
    async getUser(req, res) {
        try {
            const user = await User.findByPk(req.params.userId);
            if (!user) {
                return res.status(403).send({
                    error: 'The user does not exist'
                });
            }
            res.send(user);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the user'
            });
        }
    },
    async post(req, res) {
        try {
            const newUser = {
                username: req.body.username,
                active_hash: '',
                salt: ''
            };
            newUser.salt = crypto.randomBytes(16).toString(`hex`);
            newUser.active_hash = crypto.pbkdf2Sync('ChangeMe123', newUser.salt, 1000, 64, `sha512`).toString(`hex`);
            const user = await User.create(newUser);
            res.send(user);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to create a new user'
            });
        }
    },
    async delete(req, res) {
        try {
            const user = await User.findByPk(req.params.userId);
            if (!user) {
                return res.status(403).send({
                    error: 'The user does not exist'
                });
            }
            await user.destroy();
            res.send(user);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to delete the user'
            });
        }
    },
    async put(req, res) {
        try {
            const user = await User.update(req.body, {
                where: {
                    id: req.params.userId
                }
            });
            res.send(user);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the user'
            });
        }
    }
};
