'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      events.belongsTo(models.categories, {foreignKey: 'eventCategory'});
      events.belongsTo(models.statuses, {foreignKey: 'eventStatus'});
    }
  };
  events.init({
    eventGroupId: DataTypes.INTEGER,
    eventName: DataTypes.STRING,
    eventCategory: DataTypes.INTEGER,
    eventOverView: DataTypes.STRING,
    scheduledStartDate: DataTypes.DATE,
    expectedDeliveryDate: DataTypes.DATE,
    fixedDeliveryDate: DataTypes.DATE,
    expectedBillingDate: DataTypes.DATE,
    customerCompany: DataTypes.STRING,
    customerStaff: DataTypes.STRING,
    progress: DataTypes.INTEGER,
    eventStatus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'events',
  });
  return events;
};