const { RoomUser, Room, User} = require('../../models')
const _ = require('lodash')

module.exports = {
    async index(req, res) {
        try {
            const roomusers = await RoomUser.findAll({
                include: [{
                        model: Room,
                    },
                    {
                        model: User,
                    },
                ],
            })
            res.send(roomusers)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the Rooms users',
            })
        }
    },
    async getRoomUsers(req, res) {
        try {
            const roomusers = await RoomUser.findAll({
                where: {
                    RoomId: req.params.roomId,
                },
                include: [{
                        model: Room,
                    },
                    {
                        model: User,
                    },
                ],
            })
            res.send(roomusers)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the Room users',
            })
        }
    },
    async getUserRooms(req, res) {
        try {
            const userrooms = await RoomUser.findAll({
                where: {
                    UserId: req.params.userId,
                },
                include: [{
                    model: User,
                }, {
                    model: Room,
                }],
            })
            res.send(userrooms)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the user Rooms',
            })
        }
    },
    async post(req, res) {
        try {
            const { RoomId, UserId } = req.body
            const roomuser = await RoomUser.create({
                RoomId: RoomId,
                UserId: UserId,
            })
            res.send(roomuser)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to create the Room for the user',
            })
        }
    },
    async delete(req, res) {
        try {
            const { roomuserId } = req.params

            const roomuser = await RoomUser.findOne({
                where: {
                    id: roomuserId,
                },
            })
            if (!roomuser) {
                return res.status(403).send({
                    error: 'you do not have access to this Room user',
                })
            }
            // await RoomUser.findAll({
            //     where: {
            //         RoomId: roomuser.RoomId,
            //     },
            // }).then((roomusers) => {
            //     roomusers.forEach(async roomuser => {
            //         await roomuser.destroy()
            //     });
            // });
            await roomuser.destroy()
            res.send(roomuser)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to delete the Room user',
            })
        }
    },
    async put(req, res) {
        try {
            const roomuser = await RoomUser.update(req.body, {
                where: {
                    id: req.params.roomuserId
                }
            })
            res.send(roomuser)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the Room user'
            })
        }
    }
}