import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentWhereInput = {
  amount?: IntFilter;
  id?: StringFilter;
  productId?: IntFilter;
};
