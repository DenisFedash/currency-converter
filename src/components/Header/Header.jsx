import { useEffect, useState } from 'react';
import { fetchUSDCurrency, fetchEURCurrency } from 'services/fetchApi';
import Box from '@mui/material/Box';
import { AppBar, Currencies, Rate, Item } from './Header.styled';

export const Header = () => {
  const [currency1, setCurrency1] = useState();
  const [currency2, setCurrency2] = useState();

  useEffect(() => {
    fetchUSDCurrency().then(resp => setCurrency1(...Object.values(resp.rates)));
  }, []);
  useEffect(() => {
    fetchEURCurrency().then(resp => setCurrency2(...Object.values(resp.rates)));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <h1>Currency Converter</h1>
        <Currencies>
          <Item>
            <Rate>USD</Rate>
            <span>{currency1}</span>
          </Item>
          <div>
            <Rate>EUR</Rate>
            <span>{currency2}</span>
          </div>
        </Currencies>
      </AppBar>
    </Box>
  );
};
