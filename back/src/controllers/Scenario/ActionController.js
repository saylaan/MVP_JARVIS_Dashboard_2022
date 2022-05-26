const { Action } = require('../../models');

module.exports = {
    async index(req, res) {
        try {
            let actions = null;
            const search = req.query.search;
            if (search) {
                actions = await Action.findAll({
                    where: {
                        name: search
                    }
                });
            } else {
                actions = await Action.findAll({
                    limit: 100
                });
            }
            res.send(actions);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to fetch all the action'
            });
        }
    },
    async getAction(req, res) {
        try {
            const action = await Action.findByPk(req.params.actionId);
            if (!action) {
                return res.status(403).send({
                    error: 'The action does not exist'
                });
            }
            res.send(action);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the action'
            });
        }
    },
    async post(req, res) {
        try {
            const newaction = {
                socketId: req.body.socketId,
                value: req.body.value
            };
            const action = await Action.create(newaction);
            res.send(action);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to create a new action'
            });
        }
    },
    async delete(req, res) {
        try {
            const action = await Action.findByPk(req.params.actionId);
            if (!action) {
                return res.status(403).send({
                    error: 'The action does not exist'
                });
            }
            await action.destroy();
            res.send(action);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to delete the action'
            });
        }
    },
    async put(req, res) {
        try {
            const action = await Action.update(req.body, {
                where: {
                    id: req.params.actionId
                }
            });
            res.send(action);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the action'
            });
        }
    }
};
