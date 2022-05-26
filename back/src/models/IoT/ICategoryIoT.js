module.exports = (sequelize, DataTypes) => {
    const ICategoryIoT = sequelize.define('ICategoryIoT', {});

    ICategoryIoT.associate = function (models) {
        ICategoryIoT.belongsTo(models.IoT);
        ICategoryIoT.belongsTo(models.ICategory);
    };

    return ICategoryIoT;
};
