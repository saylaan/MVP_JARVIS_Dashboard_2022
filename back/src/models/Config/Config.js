module.exports = (sequelize, DataTypes) => {
    const Config = sequelize.define('Config', {
        start_at: DataTypes.FLOAT,
        end_at: DataTypes.FLOAT,
        trigger_condition: DataTypes.STRING,
    })

    return Config
}