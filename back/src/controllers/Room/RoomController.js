const { Room } = require('../../models');

module.exports = {
    async index(req, res) {
        try {
            let rooms = null;
            const search = req.query.search;
            if (search) {
                rooms = await Room.findAll({
                    where: {
                        name: search
                    }
                });
            } else {
                rooms = await Room.findAll({
                    limit: 100
                });
            }
            res.send(rooms);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to fetch all the Room'
            });
        }
    },
    async getRoom(req, res) {
        try {
            const room = await Room.findByPk(req.params.roomId);
            if (!room) {
                return res.status(403).send({
                    error: 'The Room does not exist'
                });
            }
            res.send(room);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the Room'
            });
        }
    },
    async post(req, res) {
        try {
            const newroom = {
                name: req.body.name
            };
            const room = await Room.create(newroom);
            res.send(room);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to create a new Room'
            });
        }
    },
    async delete(req, res) {
        try {
            const room = await Room.findByPk(req.params.roomId);
            if (!room) {
                return res.status(403).send({
                    error: 'The Room does not exist'
                });
            }
            await room.destroy();
            res.send(room);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to delete the Room'
            });
        }
    },
    async put(req, res) {
        try {
            const room = await Room.update(req.body, {
                where: {
                    id: req.params.roomId
                }
            });
            res.send(room);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the Room'
            });
        }
    }
};
