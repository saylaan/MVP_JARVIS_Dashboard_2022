module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define('Room', {
        name: DataTypes.STRING,
    })
    
    return Room
}