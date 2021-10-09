'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Portfolio.init({
    user_id: DataTypes.INTEGER,
    share_id: DataTypes.INTEGER,
    amounth: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Portfolio',
  });
  return Portfolio;
};