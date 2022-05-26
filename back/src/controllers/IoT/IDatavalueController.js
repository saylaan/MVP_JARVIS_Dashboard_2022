const { IDatavalue } = require('../../models');

module.exports = {
    async index(req, res) {
        try {
            let idatavalues = null;
            const search = req.query.search;
            if (search) {
                idatavalues = await IDatavalue.findAll({
                    where: {
                        name: search
                    }
                });
            } else {
                idatavalues = await IDatavalue.findAll({
                    limit: 100
                });
            }
            res.send(idatavalues);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to fetch all the IDatavalue'
            });
        }
    },
    async getIDatavalue(req, res) {
        try {
            const idatavalue = await IDatavalue.findByPk(req.params.idatavalueId);
            if (!idatavalue) {
                return res.status(403).send({
                    error: 'The IDatavalue does not exist'
                });
            }
            res.send(idatavalue);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to get the IDatavalue'
            });
        }
    },
    async post(req, res) {
        try {
            const newidatavalue = {
                value: req.body.value,
                category: req.body.category
            };
            const idatavalue = await IDatavalue.create(newidatavalue);
            res.send(idatavalue);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to create a new IDatavalue'
            });
        }
    },
    async delete(req, res) {
        try {
            const idatavalue = await IDatavalue.findByPk(req.params.idatavalueId);
            if (!idatavalue) {
                return res.status(403).send({
                    error: 'The IDatavalue does not exist'
                });
            }
            await idatavalue.destroy();
            res.send(idatavalue);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to delete the IDatavalue'
            });
        }
    },
    async put(req, res) {
        try {
            const idatavalue = await IDatavalue.update(req.body, {
                where: {
                    id: req.params.idatavalueId
                }
            });
            res.send(idatavalue);
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to update the IDatavalue'
            });
        }
    }
};
