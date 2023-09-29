import { Stack } from '@mui/material';
import CustomTypography from '../../atoms/Typography/index';
import CustomButton from '../../atoms/Button';
import { ADD_TO_CART, BUY_NOW } from '../../../../src/utils/constants';
import styled from 'styled-components';

interface Props {
  name: string;
  manufacturer: string;
  price: number;
  onClick: () => void;
  onBuyItem: () => void;
}

const StyleStack = styled(Stack)({
  border: '1px solid black',
  borderRadius: '16px',
  padding: '8px 4px',
  margin: '4px 8px'
});
const ProductCard = ({
  name,
  manufacturer,
  price,
  onClick,
  onBuyItem
}: Props) => {
  return (
    <StyleStack>
      <CustomTypography variant="h2">
        {name} - {manufacturer}
      </CustomTypography>
      <CustomTypography variant="h5">Price: ${price}</CustomTypography>
      <Stack flexDirection={'row'} justifyContent={'space-evenly'}>
        <CustomButton onClick={onClick} variant="contained">
          {ADD_TO_CART}
        </CustomButton>
        <CustomButton onClick={onBuyItem} variant="outlined">
          {BUY_NOW}
        </CustomButton>
      </Stack>
    </StyleStack>
  );
};

export default ProductCard;
