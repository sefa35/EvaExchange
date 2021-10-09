'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Share extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {}
	}
	Share.init(
		{
			symbol: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Share must have a symbol' },
          notEmpty: { msg: 'Symbol must not be empty' },
          is: /(.*[A-Z]){3}/i,
        },
      },
			rate: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: { msg: 'Share must have a rate' },
          notEmpty: { msg: 'Rate must not be empty' },
          is: ["[0-9]?[0-9]?(\.[0-9][0-9]?)?"],
        },
      },
		},
		{
			sequelize,
			modelName: 'Share'
		}
	);
	return Share;
};
