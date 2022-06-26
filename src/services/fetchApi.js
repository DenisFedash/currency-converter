export const fetchCurrency = async () => {
  const response = await fetch(
    'https://api.exchangerate.host/latest?base=UAH&symbols=USD,EUR'
  );
  const data = await response.json();
  return data;
};

export const fetchUSDCurrency = async () => {
  const response = await fetch(
    'https://api.exchangerate.host/latest?base=USD&symbols=UAH&amount=1'
  );
  const data = await response.json();
  return data;
};

export const fetchEURCurrency = async () => {
  const response = await fetch(
    'https://api.exchangerate.host/latest?base=EUR&symbols=UAH&amount=1'
  );
  const data = await response.json();
  return data;
};
