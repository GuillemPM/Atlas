import { DataTypes, Model, Sequelize } from 'sequelize';
import { RegionAttributes, RegionCreationAttributes } from '../RegionAttributes';

export class Region extends Model<RegionAttributes, RegionCreationAttributes> implements RegionAttributes {
  public id!: number;
  public name!: string;
  public minLevel!: number;

  public static initialize(sequelize: Sequelize) {
    this.init({
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false
      },
      minLevel: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false,
      sequelize
    })
  }
};
