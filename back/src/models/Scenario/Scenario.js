module.exports = (sequelize, DataTypes) => {
    const Scenario = sequelize.define('Scenario', {
        file_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    })
    
    return Scenario
}