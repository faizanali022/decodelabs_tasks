// Blog categories
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        name: { type: DataTypes.STRING, allowNull: false },
        slug: { type: DataTypes.STRING, allowNull: false, unique: true },
        description: DataTypes.STRING
    });
    
    Category.associate = (db) => {
        Category.hasMany(db.Blog, { foreignKey: 'categoryId' });
    };
    return Category;
};