const keyAPI = '75d859168a-5a0badcb13-re12cl';

const fetchCurrency = async () => {
  const data = await fetch(
    `https://api.fastforex.io/fetch-multi?from=USD&to=EUR%2C%20USD%2C%20UAH&api_key=${keyAPI}`
  );
  const resp = data.json();
  return resp;
};

export default fetchCurrency;
