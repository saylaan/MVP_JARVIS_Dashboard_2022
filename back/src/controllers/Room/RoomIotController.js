const { RoomIoT, Room, IoT } = require('../../models');
const _ = require('lodash');

module.exports = {
    async index(req, res) {
        try {
            const roomiots = await RoomIoT.findAll({
                include: [
                    {
                        model: Room
                    },
                    {
                        model: IoT
                    }
                ]
            });
            res.send(roomiots);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the RoomIoTs'
            });
        }
    },
    async getRoomIoTs(req, res) {
        try {
            const roomiots = await RoomIoT.findAll({
                where: {
                    RoomId: req.params.roomId
                },
                include: [
                    {
                        model: Room
                    },
                    {
                        model: IoT
                    }
                ]
            });
            res.send(roomiots);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the RoomIoTs'
            });
        }
    },
    async getIoTRooms(req, res) {
        try {
            const iotrooms = await RoomIoT.findAll({
                where: {
                    IoTId: req.params.iotId
                },
                include: [
                    {
                        model: IoT
                    },
                    {
                        model: Room
                    }
                ]
            });
            res.send(iotrooms);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the IoTRooms'
            });
        }
    },
    async post(req, res) {
        try {
            const { RoomId, IoTId } = req.body;
            const roomiot = await RoomIoT.create({
                RoomId: RoomId,
                IoTId: IoTId
            });
            res.send(roomiot);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to create the RoomIoT'
            });
        }
    },
    async delete(req, res) {
        try {
            const { roomiotId } = req.params;

            const roomiot = await RoomIoT.findOne({
                where: {
                    id: roomiotId
                }
            });
            if (!roomiot) {
                return res.status(403).send({
                    error: 'you do not have access to this RoomIoT'
                });
            }
            await roomiot.destroy();
            res.send(roomiot);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to delete the RoomIoT'
            });
        }
    },
    async put(req, res) {
        try {
            const roomiot = await RoomIoT.update(req.body, {
                where: {
                    id: req.params.roomiotId
                }
            });
            res.send(roomiot);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the RoomIoT'
            });
        }
    }
};
