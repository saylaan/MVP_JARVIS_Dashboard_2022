module.exports = (sequelize, DataTypes) => {
    const IoT = sequelize.define('IoT', {
        name: DataTypes.STRING,
        mac: {
            type: DataTypes.STRING,
            unique: true
        },
        type: DataTypes.STRING,
        category: DataTypes.STRING,
        version: DataTypes.STRING,
        details: DataTypes.STRING,
        status: DataTypes.STRING,
        socketId: {
            type: DataTypes.STRING,
            unique: true
        }
    })
    
    return IoT
}