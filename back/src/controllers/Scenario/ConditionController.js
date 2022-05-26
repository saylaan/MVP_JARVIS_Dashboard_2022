const { Condition } = require('../../models');

module.exports = {
    async index(req, res) {
        try {
            let conditions = null;
            const search = req.query.search;
            if (search) {
                conditions = await Condition.findAll({
                    where: {
                        name: search
                    }
                });
            } else {
                conditions = await Condition.findAll({
                    limit: 100
                });
            }
            res.send(conditions);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to fetch all the condition'
            });
        }
    },
    async getCondition(req, res) {
        try {
            const condition = await Condition.findByPk(req.params.conditionId);
            if (!condition) {
                return res.status(403).send({
                    error: 'The condition does not exist'
                });
            }
            res.send(condition);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the condition'
            });
        }
    },
    async post(req, res) {
        try {
            const newcondition = {
                socketId: req.body.socketId,
                value: req.body.value,
                start_date: req.body.start_date,
                end_date: req.body.end_date,
                start_time: req.body.start_time,
                end_time: req.body.end_time
            };
            const condition = await Condition.create(newcondition);
            res.send(condition);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to create a new condition'
            });
        }
    },
    async delete(req, res) {
        try {
            const condition = await Condition.findByPk(req.params.conditionId);
            if (!condition) {
                return res.status(403).send({
                    error: 'The condition does not exist'
                });
            }
            await condition.destroy();
            res.send(condition);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to delete the condition'
            });
        }
    },
    async put(req, res) {
        try {
            const condition = await Condition.update(req.body, {
                where: {
                    id: req.params.conditionId
                }
            });
            res.send(condition);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the condition'
            });
        }
    }
};
