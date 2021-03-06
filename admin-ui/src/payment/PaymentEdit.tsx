import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Amount" source="amount" />
        <NumberInput step={1} label="Product ID" source="productId" />
      </SimpleForm>
    </Edit>
  );
};
