module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            unique: true // really important for one data / no more
        },
        active_hash: DataTypes.STRING,
        salt: DataTypes.STRING
    });

    return User;
};
