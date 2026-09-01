// Blog posts schema
module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define('Blog', {
        title: { type: DataTypes.STRING, allowNull: false },
        slug: { type: DataTypes.STRING, allowNull: false, unique: true },
        excerpt: { type: DataTypes.TEXT },
        content: { type: DataTypes.TEXT, allowNull: false },
        featuredImage: { type: DataTypes.STRING },
        views: { type: DataTypes.INTEGER, defaultValue: 0 },
        published: { type: DataTypes.BOOLEAN, defaultValue: true }
    });
    
    Blog.associate = (db) => {
        Blog.belongsTo(db.Category, { foreignKey: 'categoryId' });
    };
    return Blog;
};