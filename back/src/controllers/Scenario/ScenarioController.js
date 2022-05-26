const { Scenario } = require('../../models');

module.exports = {
    async index(req, res) {
        try {
            let scenarios = null;
            const search = req.query.search;
            if (search) {
                scenarios = await Scenario.findAll({
                    where: {
                        name: search
                    }
                });
            } else {
                scenarios = await Scenario.findAll({
                    limit: 100
                });
            }
            res.send(scenarios);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to fetch all the Scenario'
            });
        }
    },
    async getScenario(req, res) {
        try {
            const scenario = await Scenario.findByPk(req.params.scenarioId);
            if (!scenario) {
                return res.status(403).send({
                    error: 'The Scenario does not exist'
                });
            }
            res.send(scenario);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the Scenario'
            });
        }
    },
    async post(req, res) {
        try {
            const newscenario = {
                name: req.body.name,
                description: req.body.description
            };
            const scenario = await Scenario.create(newscenario);
            res.send(scenario);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to create a new Scenario'
            });
        }
    },
    async delete(req, res) {
        try {
            const scenario = await Scenario.findByPk(req.params.scenarioId);
            if (!scenario) {
                return res.status(403).send({
                    error: 'The Scenario does not exist'
                });
            }
            await scenario.destroy();
            res.send(scenario);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to delete the Scenario'
            });
        }
    },
    async put(req, res) {
        try {
            const scenario = await Scenario.update(req.body, {
                where: {
                    id: req.params.scenarioId
                }
            });
            res.send(scenario);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the Scenario'
            });
        }
    }
};
