module.exports = (sequelize, DataTypes) => {
    const Action = sequelize.define('Action', {
        socketId: {
            type: DataTypes.STRING,
            allowNull: false
        }, // device
        value: DataTypes.STRING
    });

    return Action;
};
