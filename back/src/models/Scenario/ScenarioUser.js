module.exports = (sequelize, DataTypes) => {
    const ScenarioUser = sequelize.define('ScenarioUser', {})
    
    ScenarioUser.associate = function(models) {
        ScenarioUser.belongsTo(models.Scenario)
        ScenarioUser.belongsTo(models.User)
    }
    
    return ScenarioUser
}