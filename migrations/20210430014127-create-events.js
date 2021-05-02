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
        type: Sequelize.INTEGER
      },
      eventName: {
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
      eventStatus: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('events');
  }
};