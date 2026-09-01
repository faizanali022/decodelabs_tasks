// Services data
module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define('Service', {
        name: { type: DataTypes.STRING, allowNull: false },
        slug: { type: DataTypes.STRING, allowNull: false, unique: true },
        description: { type: DataTypes.TEXT },
        icon: { type: DataTypes.STRING },
        metaTitle: DataTypes.STRING,
        metaDescription: DataTypes.TEXT
    });
    return Service;
};