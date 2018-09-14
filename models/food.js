module.exports = function(sequelize, DataTypes) {
    var Food = sequelize.define('Food', {
        id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, allowNull: false}
    },
    {
        timestamps: false
    });
    Food.associate = function(models) {
        Food.hasMany(models.FoodRecommendation, {
            onDelete: 'cascade',
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Food;
}