import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Select, Container } from './Form.styled';

export const Form = ({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount,
}) => {
  return (
    <Container>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          type="number"
          value={amount}
          onChange={onChangeAmount}
        />
      </Box>
      <Select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Container>
  );
};
