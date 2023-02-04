const { DataTypes } = require("sequelize");
const sequelize = require("../infra/connection");

const VehicleModel = 
    sequelize.define(
        "VehicleModel", 
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            plate: {
                type: DataTypes.TEXT,
                allowNull: false,
                unique: true
            },
            brand: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            model: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            color: {
                type: DataTypes.TEXT,
                allowNull: true,
            }
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "vehicles"
        }
    );

module.exports = VehicleModel;