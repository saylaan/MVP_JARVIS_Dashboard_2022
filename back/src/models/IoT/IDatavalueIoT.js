module.exports = (sequelize, DataTypes) => {
    const IDatavalueIoT = sequelize.define('IDatavalueIoT', {});

    IDatavalueIoT.associate = function (models) {
        IDatavalueIoT.belongsTo(models.IoT);
        IDatavalueIoT.belongsTo(models.IDatavalue);
    };

    return IDatavalueIoT;
};
