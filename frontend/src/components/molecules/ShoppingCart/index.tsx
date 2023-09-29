import React from 'react';
import CustomTypography from '../../atoms/Typography';
import { Response } from '../../../../src/utils/constants';
export interface Response {
  id: number;
  name: string;
  manufacturer: string;
  price: number;
}
interface ShoppingCartProps {
  cartItems: Response[];
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems }) => {
  return (
    <div>
      <CustomTypography variant="h4">Shopping Cart</CustomTypography>
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} - ${item.price}
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
