const { ConfigIoT, Config, IoT } = require('../../models')
const _ = require('lodash')

module.exports = {
    async index(req, res) {
        try {
            const configiots = await ConfigIoT.findAll({
                include: [{
                        model: Config,
                    },
                    {
                        model: IoT,
                    },
                ],
            })
            res.send(configiots)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the Configs IoTs',
            })
        }
    },
    async getConfigIoTs(req, res) {
        try {
            const configiots = await ConfigIoT.findAll({
                where: {
                    ConfigId: req.params.configId,
                },
                include: [{
                        model: Config,
                    },
                    {
                        model: IoT,
                    },
                ],
            })
            res.send(configiots)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the Config IoTs',
            })
        }
    },
    async getIoTConfigs(req, res) {
        try {
            const iotconfigs = await ConfigIoT.findAll({
                where: {
                    IoTId: req.params.iotId,
                },
                include: [{
                    model: IoT,
                }, {
                    model: Config,
                }],
            })
            res.send(iotconfigs)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the IoT Configs',
            })
        }
    },
    async post(req, res) {
        try {
            const { ConfigId, IoTId } = req.body
            const configIoT = await ConfigIoT.create({
                ConfigId: ConfigId,
                IoTId: IoTId,
            })
            res.send(configIoT)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to create the Config for the IoT',
            })
        }
    },
    async delete(req, res) {
        try {
            const { configiotId } = req.params

            const configIoT = await ConfigIoT.findOne({
                where: {
                    id: configiotId,
                },
            })
            if (!configIoT) {
                return res.status(403).send({
                    error: 'you do not have access to this Config IoT',
                })
            }
            // await ConfigIoT.findAll({
            //     where: {
            //         ConfigId: configIoT.configId,
            //     },
            // }).then((configiots) => {
            //     configiots.forEach(async configIoT => {
            //         await configIoT.destroy()
            //     });
            // });
            await configIoT.destroy()
            res.send(configIoT)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to delete the Config IoT',
            })
        }
    },
    async put(req, res) {
        try {
            const configIoT = await ConfigIoT.update(req.body, {
                where: {
                    id: req.params.configiotId
                }
            })
            res.send(configIoT)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the Config IoT'
            })
        }
    }
}