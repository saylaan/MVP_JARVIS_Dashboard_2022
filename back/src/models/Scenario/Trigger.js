module.exports = (sequelize, DataTypes) => {
    const Trigger = sequelize.define('Trigger', {
        socketId: DataTypes.STRING, // sensor
        value: DataTypes.STRING
    });

    return Trigger;
};
