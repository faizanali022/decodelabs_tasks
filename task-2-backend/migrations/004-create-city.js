// Create city migration
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Cities', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            slug: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            coverageAreas: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            metaTitle: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            metaDescription: {
                type: Sequelize.TEXT,
                allowNull: true
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
        await queryInterface.dropTable('Cities');
    }
};