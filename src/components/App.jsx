import { useEffect } from 'react';
import { useState } from 'react';
import fetchCurrency from 'services/fetchApi';
import { Form } from './Form/Form';

export const App = () => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchCurrency().then(resp => setResults(resp.results));
  }, []);

  useEffect(() => {
    if (!results) {
    }
  }, [results]);

  function format(number) {
    return Number(number.toFixed(2));
  }

  const handleAmount1Change = amount1 => {
    setAmount1(amount1);
    setAmount2(format((amount1 * results[currency2]) / results[currency1]));
  };
  const handleCurrency1Change = currency1 => {
    setAmount2(format((amount1 * results[currency2]) / results[currency1]));
    setCurrency1(currency1);
  };
  const handleAmount2Change = amount2 => {
    setAmount2(amount2);
    setAmount1(format((amount2 * results[currency1]) / results[currency2]));
  };
  const handleCurrency2Change = currency2 => {
    setAmount1(format((amount2 * results[currency1]) / results[currency2]));
    setCurrency2(currency2);
  };
  return (
    <div>
      <Form
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(results)}
        amount={amount1}
        currency={currency1}
      />
      <Form
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(results)}
        amount={amount2}
        currency={currency2}
      />
    </div>
  );
};
