'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventGroupId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      eventName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      eventCategory: {
        type: Sequelize.INTEGER
      },
      eventOverView: {
        type: Sequelize.STRING
      },
      scheduledStartDate: {
        type: Sequelize.DATE
      },
      expectedDeliveryDate: {
        type: Sequelize.DATE
      },
      fixedDeliveryDate: {
        type: Sequelize.DATE
      },
      expectedBillingDate: {
        type: Sequelize.DATE
      },
      customerCompany: {
        type: Sequelize.STRING
      },
      customerStaff: {
        type: Sequelize.STRING
      },
      progress: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate : Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('events');
  }
};