import { Container, Paper, Stack } from '@mui/material';
import { useState } from 'react';
import CustomBadge from '../../atoms/Badge/index';
import InputField from '../../atoms/InputField';
import CustomTypography from '../../atoms/Typography';
import ProductCard from '../../molecules/ProductCard.tsx';
import {
  PRODUCT,
  PRODUCT_STORE,
  Response
} from '../../../../src/utils/constants';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import ProductModal from '../../molecules/ProductModal';
import styled from 'styled-components';
interface ResponseType {
  id: number;
  name: string;
  manufacturer: string;
  price: number;
}

const StylePaper = styled(Paper)({
  padding: '20px',
  maxWidth: '1000px',
  margin: '22px auto'
});
const ProductList = () => {
  const [searchItem, setSearchItem] = useState<string>('');
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<ResponseType[]>([]);
  const [isModel, setIsModel] = useState<boolean>(false);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  const openModal = () => {
    setIsModel(true);
  };

  const closeModal = () => {
    setIsModel(false);
  };
  const addToCart = (product: ResponseType) => {
    setCartItems([...cartItems, product]);
    setCartCount(cartCount + 1);
  };
  const filteredProducts = Response.filter((product) =>
    product.name.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <StylePaper elevation={3}>
      <CustomTypography variant="h2" align="center" gutterBottom>
        {PRODUCT_STORE}
      </CustomTypography>
      <InputField
        placeholder="Search Products"
        onChange={handleSearch}
        fullWidth
        sx={{ marginBottom: '20px' }}
      />
      <Container>
        <Stack flexDirection={'row'} justifyContent={'space-between'}>
          <CustomTypography
            variant="body1"
            color="red"
            sx={{ marginBottom: '10px', fontSize: '33px' }}
          >
            {PRODUCT}
          </CustomTypography>
          <CustomBadge
            badgeContent={cartCount}
            color="error"
            onClick={openModal}
            sx={{ cursor: 'pointer' }}
          >
            <ShoppingCart />
          </CustomBadge>
        </Stack>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            onClick={() => addToCart(product)}
            onBuyItem={openModal}
            {...product}
          />
        ))}
      </Container>
      <ProductModal
        isOpen={isModel}
        onClose={closeModal}
        cartItems={cartItems}
      />
    </StylePaper>
  );
};

export default ProductList;
