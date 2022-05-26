const { ICategoryIoT, ICategory, IoT } = require('../../models');
const _ = require('lodash');

module.exports = {
    async index(req, res) {
        try {
            const icategoryiots = await ICategoryIoT.findAll({
                include: [
                    {
                        model: ICategory
                    },
                    {
                        model: IoT
                    }
                ]
            });
            res.send(icategoryiots);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the ICategory IoTs'
            });
        }
    },
    async getICategoryIoTs(req, res) {
        try {
            const icategoryiots = await ICategoryIoT.findAll({
                where: {
                    ICategoryId: req.params.icategoryId
                },
                include: [
                    {
                        model: ICategory
                    },
                    {
                        model: IoT
                    }
                ]
            });
            res.send(icategoryiots);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the ICategor IoTs'
            });
        }
    },
    async getIoTICategories(req, res) {
        try {
            const ioticategories = await ICategoryIoT.findAll({
                where: {
                    IoTId: req.params.iotId
                },
                include: [
                    {
                        model: IoT
                    },
                    {
                        model: ICategory
                    }
                ]
            });
            res.send(ioticategories);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the Device ICategorys'
            });
        }
    },
    async post(req, res) {
        try {
            const { ICategoryId, IoTId } = req.body;
            const icategoryiot = await ICategoryIoT.create({
                ICategoryId: ICategoryId,
                IoTId: IoTId
            });
            res.send(icategoryiot);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to create the ICategory for the Device'
            });
        }
    },
    async delete(req, res) {
        try {
            const { icategoryiotId } = req.params;

            const icategoryiot = await ICategoryIoT.findOne({
                where: {
                    id: icategoryiotId
                }
            });
            if (!icategoryiot) {
                return res.status(403).send({
                    error: 'you do not have access to this ICategory Device'
                });
            }
            // await ICategoryIoT.findAll({
            //     where: {
            //         RoomId: IcategoryIoT.ICategoryId,
            //     },
            // }).then((icategoryiots) => {
            //     icategoryiots.forEach(async icategoryiot => {
            //         await IcategoryIoT.destroy()
            //     });
            // });
            await icategoryiot.destroy();
            res.send(icategoryiot);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to delete the ICategory Device'
            });
        }
    },
    async put(req, res) {
        try {
            const icategoryiot = await ICategoryIoT.update(req.body, {
                where: {
                    id: req.params.icategoryiotId
                }
            });
            res.send(icategoryiot);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the ICategory Device'
            });
        }
    }
};
