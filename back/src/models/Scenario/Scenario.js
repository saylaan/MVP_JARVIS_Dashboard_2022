module.exports = (sequelize, DataTypes) => {
    const Scenario = sequelize.define('Scenario', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: DataTypes.STRING,
        activate: false
    });

    return Scenario;
};
