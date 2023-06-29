import PropTypes from 'prop-types';

const CheckboxOptions = ({ title, isSelected, onOptionsChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        name="checkboxOptions"
        id="checkboxOptions"
        checked={isSelected}
        onChange={onOptionsChange}
      />
      <label>{title}</label>
    </div>
  );
};

CheckboxOptions.propTypes = {
  title: PropTypes.string,
  isSelected: PropTypes.bool,
  onOptionsChange: PropTypes.func,
};

export default CheckboxOptions;
