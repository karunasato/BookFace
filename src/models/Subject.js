
module.exports = function(sequelize, DataTypes) {
  const Subject = sequelize.define("Subject", {
  title: DataTypes.STRING,
  desc: DataTypes.STRING,
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  }
});
return Subject
}
