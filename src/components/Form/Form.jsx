import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const Form = ({
  amount,
  currency,
  currencies,
  onAmountChange,
  onCurrencyChange,
}) => {
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={e => onAmountChange(e.target.value)}
      />
      <select value={currency} onChange={e => onCurrencyChange(e.target.value)}>
        {currencies.map(currency => (
          <option key={nanoid()} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

Form.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};
