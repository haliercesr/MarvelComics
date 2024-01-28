const DataTypes = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define(
        'Favorites',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image:{
                type:DataTypes.STRING,
                allowNull:false,
            },
            comics: {
                type: DataTypes.JSONB,
                allowNull: false,
                defaultValue: [],
              },
        },
        {
            timestamps:true,
            createdAt:false,
        }
    )
}