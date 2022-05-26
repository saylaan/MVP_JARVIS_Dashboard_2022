module.exports = (sequelize, DataTypes) => {
    const ScenarioTrigger = sequelize.define('ScenarioTrigger', {});

    ScenarioTrigger.associate = function (models) {
        ScenarioTrigger.belongsTo(models.Scenario);
        ScenarioTrigger.belongsTo(models.Trigger);
    };

    return ScenarioTrigger;
};
