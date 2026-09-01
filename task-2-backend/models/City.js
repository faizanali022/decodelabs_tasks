// Cities data
module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define('City', {
        name: { type: DataTypes.STRING, allowNull: false },
        slug: { type: DataTypes.STRING, allowNull: false, unique: true },
        description: DataTypes.TEXT,
        coverageAreas: DataTypes.TEXT,
        metaTitle: DataTypes.STRING,
        metaDescription: DataTypes.TEXT
    });
    return City;
};