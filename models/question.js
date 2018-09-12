module.exports = function(sequelize, DataTypes) {
    var Question = sequelize.define("Question", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        text: {type: DataTypes.TEXT, allowNull: false},
        category: {type: DataTypes.STRING, allowNull: true},
    },
    {
        timestamps: false
    });
    return Question;
};