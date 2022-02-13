module.exports = (sequelize, DataTypes) => {
    const RoomUser = sequelize.define('RoomUser', {})
    
    RoomUser.associate = function(models) {
        RoomUser.belongsTo(models.Room)
        RoomUser.belongsTo(models.User)
    }
    
    return RoomUser
}