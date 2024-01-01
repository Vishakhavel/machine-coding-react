import { useState } from 'react';

const usePasswordGenerator = ({ checkBoxData, length }) => {
  // returns -
  // 1. password for given combo
  // 2. error message
  // 3. function to trigger password generation

  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const generatePassword = () => {
    const selectedOptions = checkBoxData.filter((data) => data.checked);

    let charset = '';

    (selectedOptions || [])?.forEach((option) => {
      switch (option.title) {
        case 'Include Uppercase letters':
          charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          break;
        case 'Include Lowercase letters':
          charset += 'abcdefghijklmnopqrstuvwxyz';
          break;
        case 'Include Numbers':
          charset += '1234567890';
          break;
        case 'Include Symbols':
          charset += '!@#$%^&*()';
          break;
        default:
          break;
      }

      let passwordTemp = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);

        passwordTemp += charset[randomIndex];
      }
      setPassword(passwordTemp);
    });

    if (selectedOptions.length === 0) {
      setErrorMessage('Please choose atleast one option.');
    } else {
      setErrorMessage('');
    }
  };

  return { password, errorMessage, generatePassword };
};

export default usePasswordGenerator;
