const { IDatavalue } = require('../../models')

module.exports = {
    async index(req, res) {
        try {
            let idatavalues = null
            const search = req.query.search
            if (search) {
                idatavalues = await IDatavalue.findAll({
                    where: {
                        name: search
                    }
                })
            } else {
                idatavalues = await IDatavalue.findAll({
                    limit: 100
                })
            }
            res.send(idatavalues)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to fetch all the idatavalue'
            })
        }
    },
    async getIDatavalue(req, res) {
        try {
            const idatavalue = await IDatavalue.findByPk(req.params.idatavalueId)
            if (!idatavalue) {
                return res.status(403).send({
                    error: 'The idatavalue does not exist'
                })
            }
            res.send(idatavalue)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the idatavalue'
            })
        }
    },
    async post(req, res) {
        try {
            // const userId = req.params.userId
            const newidatavalue = {
                type: req.body.type,
                value: req.body.value,
                timestamp: req.body.timestamp,
                longetitude: req.body.longetitude,
                latitude: req.body.latitude
            }
            const idatavalue = await IDatavalue.create(newidatavalue)
            // await idatavalueUser.create({
            //     UserId: userId,
            //     idatavalueId: IDatavalue.id
            // })
            res.send(idatavalue)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to create a new idatavalue'
            })
        }
    },
    async delete(req, res) {
        try {
            const idatavalue = await IDatavalue.findByPk(req.params.idatavalueId)
            if (!idatavalue) {
                return res.status(403).send({
                    error: 'The idatavalue does not exist'
                })
            }
            await idatavalue.destroy()
            res.send(idatavalue)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to delete the idatavalue'
            })
        }
    },
    async put(req, res) {
        try {
            const idatavalue = await IDatavalue.update(req.body, {
                where: {
                    id: req.params.idatavalueId
                }
            })
            res.send(idatavalue)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the idatavalue'
            })
        }
    }
}