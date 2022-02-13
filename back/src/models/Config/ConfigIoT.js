module.exports = (sequelize, DataTypes) => {
    const ConfigIoT = sequelize.define('ConfigIoT', {})
    
    ConfigIoT.associate = function(models) {
        ConfigIoT.belongsTo(models.Config)
        ConfigIoT.belongsTo(models.IoT)
    }

    return ConfigIoT
}