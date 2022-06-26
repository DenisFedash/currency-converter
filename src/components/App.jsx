import { Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchCurrency } from 'services/fetchApi';
import { Form } from './Form/Form';
import { Header } from './Header/Header';

export const App = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(100);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [exchange, setExchnge] = useState();
  const format = number => {
    return number.toFixed(2);
  };
  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = format(amount * exchange);
  } else {
    toAmount = amount;
    fromAmount = format(amount / exchange);
  }

  useEffect(() => {
    fetchCurrency().then(resp => {
      const currencyUSD = Object.keys(resp.rates)[1];
      setCurrencyOptions([resp.base, ...Object.keys(resp.rates)]);
      setFromCurrency(resp.base);
      setToCurrency(currencyUSD);
      setExchnge(resp.rates[currencyUSD]);
    });
  }, []);

  useEffect(() => {
    if (fromCurrency !== null && toCurrency !== null) {
      fetch(
        `https://api.exchangerate.host/latest?base=${fromCurrency}&symbols=${toCurrency}`
      )
        .then(res => res.json())
        .then(data => setExchnge(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  const handleFromAmountChange = e => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };
  const handleToAmountChange = e => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };
  return (
    <div>
      <Header />
      <Paper
        elevation={3}
        sx={{
          position: 'relative',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          borderRadius: '4px',
          paddingTop: '40px',
          paddingBottom: '40px',
          margin: 'auto',
          maxWidth: '300px',
          padding: '15px',
        }}
      >
        <Form
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={e => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={handleFromAmountChange}
        />
        <Form
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={e => setToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={handleToAmountChange}
        />
      </Paper>
    </div>
  );
};
