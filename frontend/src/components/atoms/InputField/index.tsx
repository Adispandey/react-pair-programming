import { InputBase, InputBaseProps } from '@mui/material';
import styled from 'styled-components';

const StyleInputBase = styled(InputBase)({
  border: '2px solid black'
});

const InputField = (props: InputBaseProps) => {
  return <StyleInputBase {...props} />;
};

export default InputField;
