const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Character', {
    id: {
      type: DataTypes.UUID,    
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    created: {
      type: DataTypes.BOOLEAN,  
      defaultValue: true,
    },
  },
    {
      timestamps: false,
    }
  );
};