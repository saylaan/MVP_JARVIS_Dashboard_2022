const kmeans = require('node-kmeans');

module.exports = {
    async post(req, res) {
        var data = req.body.name;
        var size = 3;

        let vectors = new Array();
        let clusters = null;
        for (let i = 0; i < data.length; i++) {
            let date_float = parseFloat(new Date(data[i]['updatedAt']).getDate());
            let day_float = parseFloat(new Date(data[i]['updatedAt']).getDay());
            let hours_float = parseFloat(new Date(data[i]['updatedAt']).getHours());
            let minutes_float = parseFloat(new Date(data[i]['updatedAt']).getMinutes());
            console.log(day_float)
            console.log(hours_float)
            vectors[i] = [day_float, hours_float+(minutes_float*0.01)];
        }
        try {
            kmeans.clusterize(vectors, { k: size }, (err, result) => {
                if (err) console.log(err);
                clusters = result.map((cluster) => {
                    return cluster['clusterInd'].map((index) => {
                        return data[index];
                    });
                });
                console.log(result)
                return res.send(result[0]);
                // return res.send(result)
                // return res.send(JSON.stringify({ model: res[0] }));
            });
        } catch (err) {
            res.status(500).send({
                err: 'An error has occured while trying to make the model'
            });
        }
    }
};
