import { Model } from "sequelize";

/**
 * @typedef CutiAttributes
 * @property {string} id
 * @property {string} nomor_induk
 * @property {string} tgl_cuti
 * @property {number} lama_cuti
 * @property {string} keterangan
 * @property {string} created_at
 * @property {string} updated_at
 */

export const Models = {};

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  class Cuti extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * @param {Record<import('./index.js').ModelName, any>} models
     */
    static associate(models) {
      // define association here
    }
  }
  Cuti.init(
    {
      nomor_induk: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tgl_cuti: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      lama_cuti: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      keterangan: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Cuti",
      tableName: "Cutis",
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Cuti;
};
