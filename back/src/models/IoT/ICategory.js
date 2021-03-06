module.exports = (sequelize, DataTypes) => {
    const ICategory = sequelize.define('ICategory', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: DataTypes.STRING
    });

    return ICategory;
};
