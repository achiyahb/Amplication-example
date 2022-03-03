import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  price?: IntFilter;
};
