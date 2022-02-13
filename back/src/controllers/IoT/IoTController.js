const { IoT } = require('../../models')

module.exports = {
    async index(req, res) {
        try {
            let iots = null
            const search = req.query.search
            if (search) {
                iots = await IoT.findAll({
                    where: {
                        name: search
                    }
                })
            } else {
                iots = await IoT.findAll({
                    limit: 100
                })
            }
            res.send(iots)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to fetch all the iot'
            })
        }
    },
    async getIoT(req, res) {
        try {
            const iot = await IoT.findByPk(req.params.iotId)
            if (!iot) {
                return res.status(403).send({
                    error: 'The iot does not exist'
                })
            }
            res.send(iot)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the iot'
            })
        }
    },
    async post(req, res) {
        try {
            // const userId = req.params.userId
            const newiot = {
                name: req.body.name,
                mac: req.body.mac,
                type: req.body.type,
                category: req.body.category,
                version: req.body.version,
                details: req.body.name + " with mac address " + req.body.mac + " part of " 
                + req.body.category + " with version" + req.body.version,
                status: req.body.status,
                socketId: req.body.socketId
            }
            const iot = await IoT.create(newiot)
            // await iotUser.create({
            //     UserId: userId,
            //     iotId: IoT.id
            // })
            res.send(iot)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to create a new iot'
            })
        }
    },
    async delete(req, res) {
        try {
            const iot = await IoT.findByPk(req.params.iotId)
            if (!iot) {
                return res.status(403).send({
                    error: 'The iot does not exist'
                })
            }
            await iot.destroy()
            res.send(iot)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to delete the iot'
            })
        }
    },
    async put(req, res) {
        try {
            const iot = await IoT.update(req.body, {
                where: {
                    id: req.params.iotId
                }
            })
            res.send(iot)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the iot'
            })
        }
    }
}