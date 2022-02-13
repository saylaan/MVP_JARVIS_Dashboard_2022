const { ScenarioUser, Scenario, User } = require('../../models')
const _ = require('lodash')

module.exports = {
    async index(req, res) {
        try {
            const scenariousers = await ScenarioUser.findAll({
                include: [{
                        model: Scenario,
                    },
                    {
                        model: User,
                    },
                ],
            })
            res.send(scenariousers)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the Scenarios users',
            })
        }
    },
    async getScenarioUsers(req, res) {
        try {
            const scenariousers = await ScenarioUser.findAll({
                where: {
                    ScenarioId: req.params.scenarioId,
                },
                include: [{
                        model: Scenario,
                    },
                    {
                        model: User,
                    },
                ],
            })
            res.send(scenariousers)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the Scenario users',
            })
        }
    },
    async getUserScenarios(req, res) {
        try {
            const userscenarios = await ScenarioUser.findAll({
                    where: {
                        UserId: req.params.userId,
                    },
                    include: [{
                        model: User,
                    }, {
                        model: Scenario,
                    }],
                })
            res.send(userscenarios)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the user Scenarios',
            })
        }
    },
    async post(req, res) {
        try {
            const { ScenarioId, UserId } = req.body
            const scenariouser = await ScenarioUser.create({
                ScenarioId: ScenarioId,
                UserId: UserId,
            })
            res.send(scenariouser)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to create the Scenario for the user',
            })
        }
    },
    async delete(req, res) {
        try {
            const { scenariouserId } = req.params

            const scenariouser = await ScenarioUser.findOne({
                where: {
                    id: scenariouserId,
                },
            })
            if (!scenariouser) {
                return res.status(403).send({
                    error: 'you do not have access to this Scenario user',
                })
            }
            // await ScenarioUser.findAll({
            //     where: {
            //         ScenarioId: scenariouser.ScenarioId,
            //     },
            // }).then((scenariousers) => {
            //     scenariousers.forEach(async scenariouser => {
            //         await scenariouser.destroy()
            //     });
            // });
            await scenariouser.destroy()
            res.send(scenariouser)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to delete the Scenario user',
            })
        }
    },
    async put(req, res) {
        try {
            const scenariouser = await ScenarioUser.update(req.body, {
                where: {
                    id: req.params.scenariouserId
                }
            })
            res.send(scenariouser)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the Scenario user'
            })
        }
    }
}