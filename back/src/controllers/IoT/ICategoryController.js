const { ICategory } = require('../../models')

module.exports = {
    async index(req, res) {
        try {
            let icategories = null
            const search = req.query.search
            if (search) {
                icategories = await ICategory.findAll({
                    where: {
                        name: search
                    }
                })
            } else {
                icategories = await ICategory.findAll({
                    limit: 100
                })
            }
            res.send(icategories)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to fetch all the icategory'
            })
        }
    },
    async getICategory(req, res) {
        try {
            const icategory = await ICategory.findByPk(req.params.icategoryId)
            if (!icategory) {
                return res.status(403).send({
                    error: 'The icategory does not exist'
                })
            }
            res.send(icategory)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the icategory'
            })
        }
    },
    async post(req, res) {
        try {
            // const userId = req.params.userId
            const newicategory = {
                name: req.body.name
            }
            const icategory = await ICategory.create(newicategory)
            // await ICategory.create({
            //     UserId: userId,
            //     icategoryId: icategory.id
            // })
            res.send(icategory)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to create a new icategory'
            })
        }
    },
    async delete(req, res) {
        try {
            const icategory = await ICategory.findByPk(req.params.icategoryId)
            if (!icategory) {
                return res.status(403).send({
                    error: 'The icategory does not exist'
                })
            }
            await icategory.destroy()
            res.send(icategory)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to delete the icategory'
            })
        }
    },
    async put(req, res) {
        try {
            const icategory = await ICategory.update(req.body, {
                where: {
                    id: req.params.icategoryId
                }
            })
            res.send(icategory)
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the icategory'
            })
        }
    }
}