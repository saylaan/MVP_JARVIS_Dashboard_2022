const { Config } = require('../../models')

module.exports = {
    async index(req, res) {
        try {
            let configs = null
            const search = req.query.search
            if (search) {
                configs = await Config.findAll({
                    where: {
                        name: search
                    }
                })
            } else {
                configs = await Config.findAll({
                    limit: 100
                })
            }
            res.send(configs)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to fetch all the config'
            })
        }
    },
    async getConfig(req, res) {
        try {
            const config = await Config.findByPk(req.params.configId)
            if (!config) {
                return res.status(403).send({
                    error: 'The config does not exist'
                })
            }
            res.send(config)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the config'
            })
        }
    },
    async post(req, res) {
        try {
            // const userId = req.params.userId
            const newconfig = {
                start_at: req.body.start_at,
                end_at: req.body.end_at,
                trigger_condition: req.body.trigger_condition
            }
            const config = await Config.create(newconfig)
            // await ConfigUser.create({
            //     UserId: userId,
            //     ConfigId: config.id
            // })
            res.send(config)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to create a new config'
            })
        }
    },
    async delete(req, res) {
        try {
            const config = await Config.findByPk(req.params.configId)
            if (!config) {
                return res.status(403).send({
                    error: 'The config does not exist'
                })
            }
            await config.destroy()
            res.send(config)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to delete the config'
            })
        }
    },
    async put(req, res) {
        try {
            const config = await Config.update(req.body, {
                where: {
                    id: req.params.configId
                }
            })
            res.send(config)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the config'
            })
        }
    }
}