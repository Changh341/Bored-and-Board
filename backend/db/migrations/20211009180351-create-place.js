'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Places', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            hostId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'Users' }
            },
            price: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false
            },
            address: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            city: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            state: {
                type: Sequelize.STRING(2),
                allowNull: false
            },
            country: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            lat: {
                type: Sequelize.DECIMAL(10, 5),
                allowNull: true
            },
            long: {
                type: Sequelize.DECIMAL(10, 5),
                allowNull: true
            },
            description: {
                type: Sequelize.TEXT
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Places');
    }
};