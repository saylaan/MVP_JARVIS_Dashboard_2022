const { ScenarioTrigger, Scenario, Trigger } = require('../../models');
const _ = require('lodash');

module.exports = {
    async index(req, res) {
        try {
            const scenariotriggers = await ScenarioTrigger.findAll({
                include: [
                    {
                        model: Scenario
                    },
                    {
                        model: Trigger
                    }
                ]
            });
            res.send(scenariotriggers);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the scenariotriggers'
            });
        }
    },
    async getScenarioTriggers(req, res) {
        try {
            const scenariotriggers = await ScenarioTrigger.findAll({
                where: {
                    ScenarioId: req.params.scenarioId
                },
                include: [
                    {
                        model: Scenario
                    },
                    {
                        model: Trigger
                    }
                ]
            });
            res.send(scenariotriggers);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the scenariotriggers'
            });
        }
    },
    async getTriggerScenarios(req, res) {
        try {
            const triggerrooms = await ScenarioTrigger.findAll({
                where: {
                    triggerId: req.params.triggerId
                },
                include: [
                    {
                        model: Trigger
                    },
                    {
                        model: Scenario
                    }
                ]
            });
            res.send(triggerrooms);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the triggerscenarios'
            });
        }
    },
    async post(req, res) {
        try {
            const { ScenarioId, TriggerId } = req.body;
            const scenariotrigger = await ScenarioTrigger.create({
                ScenarioId: ScenarioId,
                TriggerId: TriggerId
            });
            res.send(scenariotrigger);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to create the scenariotrigger'
            });
        }
    },
    async delete(req, res) {
        try {
            const { scenariotriggerId } = req.params;

            const scenariotrigger = await ScenarioTrigger.findOne({
                where: {
                    id: scenariotriggerId
                }
            });
            if (!scenariotrigger) {
                return res.status(403).send({
                    error: 'you do not have access to this scenariotrigger'
                });
            }
            await scenariotrigger.destroy();
            res.send(scenariotrigger);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to delete the scenariotrigger'
            });
        }
    },
    async put(req, res) {
        try {
            const scenariotrigger = await ScenarioTrigger.update(req.body, {
                where: {
                    id: req.params.scenariotriggerId
                }
            });
            res.send(scenariotrigger);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the scenariotrigger'
            });
        }
    }
};
