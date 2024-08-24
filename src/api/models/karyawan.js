import { Model } from "sequelize";

/**
 * @typedef KaryawanAttributes
 * @property {string} id
 * @property {string} nomor_induk
 * @property {string} nama
 * @property {string} alamat
 * @property {string} tgl_lahir
 * @property {string} tgl_gabung
 * @property {string} created_at
 * @property {string} updated_at
 * @property {number} max_nomor_induk
 */

export const Models = {};

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
export default (sequelize, DataTypes) => {
  class Karyawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * @param {Record<import('./index.js').ModelName, any>} models
     */
    static associate(models) {
      Karyawan.hasMany(models.Cuti, {
        foreignKey: "karyawan_id",
        as: "cuti",
      });
    }
  }
  Karyawan.init(
    {
      nomor_induk: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          name: "nomor_induk",
          msg: "Nomor induk karyawan harus unik",
        },
      },
      nama: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      alamat: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      tgl_lahir: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tgl_gabung: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Karyawan",
      tableName: "Karyawans",
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Karyawan;
};
