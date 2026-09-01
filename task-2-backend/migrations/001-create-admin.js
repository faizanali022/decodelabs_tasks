// Create admin migration
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Admins', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            username: {
                type: Sequelize.STRING(50),
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(100),
                allowNull: false
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
        await queryInterface.dropTable('Admins');
    }
};