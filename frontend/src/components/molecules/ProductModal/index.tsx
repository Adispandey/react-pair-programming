import React from 'react';
import Modal from '@mui/material/Modal';
import ShoppingCart, { Response } from '../ShoppingCart';
import CustomTypography from '../../atoms/Typography';
import CustomButton from '../../atoms/Button';
import { Box, Stack } from '@mui/material';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Response[];
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  cartItems
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4
        }}
      >
        <CustomTypography variant="h5" gutterBottom>
          Shopping Cart
        </CustomTypography>
        <ShoppingCart cartItems={cartItems} />
        <Stack flexDirection={'row'} gap={4}>
          <CustomButton variant="contained" color="secondary" sx={{ mt: 2 }}>
            Pay
          </CustomButton>
          <CustomButton
            onClick={onClose}
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
          >
            Cancel
          </CustomButton>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ProductModal;
