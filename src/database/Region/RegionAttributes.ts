import { Optional } from "sequelize/types";

export interface RegionAttributes {
  id: number;
  name: string;
  minLevel: number;
}

export interface RegionCreationAttributes extends Optional<RegionAttributes, null> { }