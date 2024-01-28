const DataTypes = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define(
        'Favorites',
        {
            id: {
                type: DataTypes.NUMBER,
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
            }
        },
        {
            timestamps:true,
            createdAt:false,
        }
    )
}