// Create blog migration
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Blogs', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            title: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            slug: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true
            },
            excerpt: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            content: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            featuredImage: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            views: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            published: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            categoryId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Categories',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
            }
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('Blogs');
    }
};