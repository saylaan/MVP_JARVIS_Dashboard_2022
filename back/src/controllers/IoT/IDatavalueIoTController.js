
const { IDatavalueIoT, IDatavalue, IoT  } = require('../../models')
const _ = require('lodash')

module.exports = {
    async index(req, res) {
        try {
            const idatavalueiots = await IDatavalueIoT.findAll({
                    include: [{
                            model: IDatavalue,
                        },
                        {
                            model: IoT,
                        },
                    ],
                })
            res.send(idatavalueiots)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the SDatavalues IoTs',
            })
        }
    },
    async getIDatavalueIoTs(req, res) {
        try {
            const idatavalueiots = await IDatavalueIoT.findAll({
                    where: {
                        IDatavalueId: req.params.idatavalueId,
                    },
                    include: [{
                            model: IDatavalue,
                        },
                        {
                            model: IoT,
                        },
                    ],
                })
            res.send(idatavalueiots)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the SDatavalue IoTs',
            })
        }
    },
    async getIoTIDatavalues(req, res) {
        try {
            const iotidatavalues = await IDatavalueIoT.findAll({
                    where: {
                        IoTId: req.params.iotId,
                    },
                    include: [{
                        model: IoT,
                    }, {
                        model: IDatavalue,
                    }],
                })
            res.send(iotidatavalues)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the IoT SDatavalues',
            })
        }
    },
    async post(req, res) {
        try {
            const { IDatavalueId, IoTId } = req.body
            const idatavalueiot = await IDatavalueIoT.create({
                IDatavalueId: IDatavalueId,
                IoTId: IoTId,
            })
            res.send(idatavalueiot)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to create the IDatavalue for the IoT',
            })
        }
    },
    async delete(req, res) {
        try {
            const { idatavalueiotId } = req.params

            const idatavalueiot = await IDatavalueIoT.findOne({
                where: {
                    id: idatavalueiotId,
                },
            })
            if (!idatavalueiot) {
                return res.status(403).send({
                    error: 'you do not have access to this SDatavalue IoT',
                })
            }
            // await SDatavaluePicture.findAll({
            //     where: {
            //         SDatavalueId: IDatavalueIoT.SDatavalueId,
            //     },
            // }).then((SDatavaluepictures) => {
            //     SDatavaluepictures.forEach(async SDatavaluepicture => {
            //         await IDatavalueIoT.destroy()
            //     });
            // });
            await idatavalueiot.destroy()
            res.send(idatavalueiot)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to delete the SDatavalue IoT',
            })
        }
    },
    async put(req, res) {
        try {
            const idatavalueiot = await IDatavalueIoT.update(req.body, {
                where: {
                    id: req.params.idatavalueiotId
                }
            })
            res.send(idatavalueiot)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the SDatavalue IoT'
            })
        }
    }
}