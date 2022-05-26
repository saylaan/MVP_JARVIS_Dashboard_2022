module.exports = (sequelize, DataTypes) => {
    const ScenarioCondition = sequelize.define('ScenarioCondition', {});

    ScenarioCondition.associate = function (models) {
        ScenarioCondition.belongsTo(models.Scenario);
        ScenarioCondition.belongsTo(models.Condition);
    };

    return ScenarioCondition;
};
