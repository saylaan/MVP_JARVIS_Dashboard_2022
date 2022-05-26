module.exports = (sequelize, DataTypes) => {
    const ScenarioAction = sequelize.define('ScenarioAction', {});

    ScenarioAction.associate = function (models) {
        ScenarioAction.belongsTo(models.Scenario);
        ScenarioAction.belongsTo(models.Action);
    };

    return ScenarioAction;
};
