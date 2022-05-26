const { ScenarioAction, Scenario, Action } = require('../../models');
const _ = require('lodash');

module.exports = {
    async index(req, res) {
        try {
            const scenarioactions = await ScenarioAction.findAll({
                include: [
                    {
                        model: Scenario
                    },
                    {
                        model: Action
                    }
                ]
            });
            res.send(scenarioactions);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the scenarioactions'
            });
        }
    },
    async getScenarioActions(req, res) {
        try {
            const scenarioactions = await ScenarioAction.findAll({
                where: {
                    ScenarioId: req.params.scenarioId
                },
                include: [
                    {
                        model: Scenario
                    },
                    {
                        model: Action
                    }
                ]
            });
            res.send(scenarioactions);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the scenarioactions'
            });
        }
    },
    async getActionScenarios(req, res) {
        try {
            const Actionrooms = await ScenarioAction.findAll({
                where: {
                    ActionId: req.params.ActionId
                },
                include: [
                    {
                        model: Action
                    },
                    {
                        model: Scenario
                    }
                ]
            });
            res.send(Actionrooms);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the actionscenarios'
            });
        }
    },
    async post(req, res) {
        try {
            const { ScenarioId, ActionId } = req.body;
            const scenarioaction = await ScenarioAction.create({
                ScenarioId: ScenarioId,
                ActionId: ActionId
            });
            res.send(scenarioaction);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to create the scenarioaction'
            });
        }
    },
    async delete(req, res) {
        try {
            const { scenarioactionId } = req.params;

            const scenarioaction = await ScenarioAction.findOne({
                where: {
                    id: scenarioactionId
                }
            });
            if (!scenarioaction) {
                return res.status(403).send({
                    error: 'you do not have access to this scenarioaction'
                });
            }
            await scenarioaction.destroy();
            res.send(scenarioaction);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to delete the scenarioaction'
            });
        }
    },
    async put(req, res) {
        try {
            const scenarioaction = await ScenarioAction.update(req.body, {
                where: {
                    id: req.params.scenarioactionId
                }
            });
            res.send(scenarioaction);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the scenarioaction'
            });
        }
    }
};
