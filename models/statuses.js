'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class statuses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      statuses.hasMany(models.events, {foreignKey: 'eventStatus'});
      // define association here
      // statuses.hasMany(models.events);
      // statuses.hasMany(models.events, {foreignKey: 'prefecture_id'});
           // statuses.belongsTo(models.events);
    }
  };
  statuses.init({
    eventGroupId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'statuses',
  });
  return statuses;
};