const { ScenarioCondition, Scenario, Condition } = require('../../models');
const _ = require('lodash');

module.exports = {
    async index(req, res) {
        try {
            const scenarioconditions = await ScenarioCondition.findAll({
                include: [
                    {
                        model: Scenario
                    },
                    {
                        model: Condition
                    }
                ]
            });
            res.send(scenarioconditions);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the scenarioconditions'
            });
        }
    },
    async getScenarioConditions(req, res) {
        try {
            const scenarioconditions = await ScenarioCondition.findAll({
                where: {
                    ScenarioId: req.params.scenarioId
                },
                include: [
                    {
                        model: Scenario
                    },
                    {
                        model: Condition
                    }
                ]
            });
            res.send(scenarioconditions);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the scenarioconditions'
            });
        }
    },
    async getConditionScenarios(req, res) {
        try {
            const conditionrooms = await ScenarioCondition.findAll({
                where: {
                    conditionId: req.params.conditionId
                },
                include: [
                    {
                        model: Condition
                    },
                    {
                        model: Scenario
                    }
                ]
            });
            res.send(conditionrooms);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the conditionscenarios'
            });
        }
    },
    async post(req, res) {
        try {
            const { ScenarioId, ConditionId } = req.body;
            const scenariocondition = await ScenarioCondition.create({
                ScenarioId: ScenarioId,
                ConditionId: ConditionId
            });
            res.send(scenariocondition);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to create the scenariocondition'
            });
        }
    },
    async delete(req, res) {
        try {
            const { scenarioconditionId } = req.params;

            const scenariocondition = await ScenarioCondition.findOne({
                where: {
                    id: scenarioconditionId
                }
            });
            if (!scenariocondition) {
                return res.status(403).send({
                    error: 'you do not have access to this scenariocondition'
                });
            }
            await scenariocondition.destroy();
            res.send(scenariocondition);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to delete the scenariocondition'
            });
        }
    },
    async put(req, res) {
        try {
            const scenariocondition = await ScenarioCondition.update(req.body, {
                where: {
                    id: req.params.scenarioconditionId
                }
            });
            res.send(scenariocondition);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the scenariocondition'
            });
        }
    }
};
