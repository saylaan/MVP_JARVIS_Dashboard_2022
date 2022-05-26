module.exports = (sequelize, DataTypes) => {
    const Condition = sequelize.define('Condition', {
        socketId: DataTypes.STRING, // device
        value: DataTypes.STRING,
        start_date: DataTypes.STRING,
        end_date: DataTypes.STRING,
        start_time: DataTypes.STRING,
        end_time: DataTypes.STRING
    });

    return Condition;
};
