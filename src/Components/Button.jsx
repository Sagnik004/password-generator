import PropTypes from 'prop-types';

const Button = ({ text, styles, disabled = false, onBtnClick }) => {
  
  return (
    <button className={styles} onClick={onBtnClick} disabled={disabled}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  styles: PropTypes.string,
  disabled: PropTypes.bool,
  onBtnClick: PropTypes.func,
};

export default Button;
