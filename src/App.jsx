import { useState } from 'react';

import PasswordStrengthIndicator from './Components/PasswordStrengthIndicator';
import CheckboxOptions from './Components/CheckboxOptions';
import Button from './Components/Button';
import usePasswordGenerator from './hooks/use-password-generator';
import './App.css';

const App = () => {
  const [length, setLength] = useState(4);
  const [checkboxOptions, setCheckboxOptions] = useState([
    { id: 1, title: 'Include Uppercase Letters', isSelected: false },
    { id: 2, title: 'Include Lowercase Letters', isSelected: false },
    { id: 3, title: 'Include Numbers', isSelected: false },
    { id: 4, title: 'Include Symbols', isSelected: false },
  ]);
  const [copied, setCopied] = useState(false);

  const handleCheckboxOptionsChange = (id) => {
    const updatedOptions = [...checkboxOptions];
    updatedOptions.forEach((opt) => {
      if (opt.id === id) {
        opt.isSelected = !(opt.isSelected);
      }
    });
    setCheckboxOptions(updatedOptions);
  };

  const handlePasswordCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  return (
    <div className="container">
      {/* Generated password, and copy */}
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <Button
            text={copied ? "Copied": "Copy"}
            styles="copyBtn"
            disabled={copied}
            onBtnClick={handlePasswordCopy}
          />
        </div>
      )}

      {/* Character length */}
      <div className="charlength">
        <span>
          <label>Character Length:</label>
          <label className="charlength-value">{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      {/* Checkbox options */}
      <div className="checkbox-options">
        {checkboxOptions.map((data) => (
          <CheckboxOptions
            key={data.id}
            title={data.title}
            isSelected={data.isSelected}
            onOptionsChange={() => handleCheckboxOptionsChange(data.id)}
          />
        ))}
      </div>

      {/* Password Strength indicator */}
      <PasswordStrengthIndicator password={password} />

      {/* Error Handling */}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}

      {/* Generate password button */}
      <Button
        text="Generate Password"
        styles="generateBtn"
        onBtnClick={() => generatePassword(checkboxOptions, length)}
      />
    </div>
  );
};

export default App;
