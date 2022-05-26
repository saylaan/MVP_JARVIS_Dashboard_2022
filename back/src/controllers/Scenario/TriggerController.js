const { Trigger } = require('../../models');

module.exports = {
    async index(req, res) {
        try {
            let triggers = null;
            const search = req.query.search;
            if (search) {
                triggers = await Trigger.findAll({
                    where: {
                        name: search
                    }
                });
            } else {
                triggers = await Trigger.findAll({
                    limit: 100
                });
            }
            res.send(triggers);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to fetch all the trigger'
            });
        }
    },
    async getTrigger(req, res) {
        try {
            const trigger = await Trigger.findByPk(req.params.triggerId);
            if (!trigger) {
                return res.status(403).send({
                    error: 'The trigger does not exist'
                });
            }
            res.send(trigger);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the trigger'
            });
        }
    },
    async post(req, res) {
        try {
            const newtrigger = {
                socketId: req.body.socketId,
                value: req.body.value
            };
            const trigger = await Trigger.create(newtrigger);
            res.send(trigger);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to create a new trigger'
            });
        }
    },
    async delete(req, res) {
        try {
            const trigger = await Trigger.findByPk(req.params.triggerId);
            if (!trigger) {
                return res.status(403).send({
                    error: 'The trigger does not exist'
                });
            }
            await trigger.destroy();
            res.send(trigger);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to delete the trigger'
            });
        }
    },
    async put(req, res) {
        try {
            const trigger = await Trigger.update(req.body, {
                where: {
                    id: req.params.triggerId
                }
            });
            res.send(trigger);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the trigger'
            });
        }
    }
};
