module.exports = (sequelize, DataTypes) => {
    const IDatavalue = sequelize.define('IDatavalue', {
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        value: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    return IDatavalue;
};
