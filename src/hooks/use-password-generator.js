import { useState } from 'react';

const UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE_CHARS = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()';

const usePasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const generatePassword = (checkboxOptions, length) => {
    let generatedPassword = '';

    const selectedOptions = checkboxOptions.filter((opt) => opt.isSelected);
    if (selectedOptions.length < 1) {
      setErrorMessage('Please select at least 1 option!');
      setPassword('');
      return;
    }

    let isUpperCaseSelected = false;
    let isLowerCaseSelected = false;
    let isNumbersSelected = false;
    let isSymbolsSelected = false;
    selectedOptions.forEach((opt) => {
      switch (opt.title) {
        case 'Include Uppercase Letters':
          isUpperCaseSelected = true;
          break;
        case 'Include Lowercase Letters':
          isLowerCaseSelected = true;
          break;
        case 'Include Numbers':
          isNumbersSelected = true;
          break;
        case 'Include Symbols':
          isSymbolsSelected = true;
          break;
        default:
          break;
      }
    });

    while (generatedPassword.length < length) {
      if (
        isUpperCaseSelected ||
        isLowerCaseSelected ||
        isNumbersSelected ||
        isSymbolsSelected
      ) {
        if (isUpperCaseSelected) {
          generatedPassword +=
            UPPERCASE_CHARS[Math.floor(Math.random() * UPPERCASE_CHARS.length)];
        }
        if (isLowerCaseSelected) {
          generatedPassword +=
            LOWERCASE_CHARS[Math.floor(Math.random() * LOWERCASE_CHARS.length)];
        }
        if (isNumbersSelected) {
          generatedPassword +=
            NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
        }
        if (isSymbolsSelected) {
          generatedPassword +=
            SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
        }
      }
    }

    setPassword(generatedPassword);
    setErrorMessage('');
  };

  return { password, errorMessage, generatePassword };
};

export default usePasswordGenerator;
