module.exports = (sequelize, DataTypes) => {
    const RoomIoT = sequelize.define('RoomIoT', {})

    RoomIoT.associate = function(models) {
        RoomIoT.belongsTo(models.Room)
        RoomIoT.belongsTo(models.IoT)
    }
    
    return RoomIoT
}