import './App.css';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import usePasswordGenerator from './hooks/use-password-generator';
import { useState } from 'react';
const App = () => {
  const [checkBoxData, setCheckBoxData] = useState([
    { title: 'Include Uppercase letters', checked: false, key: 1 },
    { title: 'Include Lowercase letters', checked: false, key: 2 },
    { title: 'Include Numbers', checked: false, key: 3 },
    { title: 'Include Symbols', checked: false, key: 4 },
  ]);

  const [length, setLength] = useState(12);
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  const { password, errorMessage, generatePassword } = usePasswordGenerator({
    checkBoxData,
    length,
  });

  const handleCopyClick = (e) => {
    navigator.clipboard.writeText(password);
    setCopyButtonText('Copied!');
    setTimeout(() => {
      setCopyButtonText('Copy');
    }, 1000);
  };
  const handleGeneratePassword = () => {
    generatePassword({ length, checkBoxData });
  };
  const handleSliderChange = (e) => {
    setLength(e.target.value);
  };

  const handleCheckBoxClick = (uniqueKey) => {
    setCheckBoxData((prevState) => {
      let updatedCheckBoxData = prevState.map((data) => {
        if (data.key === uniqueKey) {
          return { ...data, checked: !data.checked };
        }
        return data;
      });
      return updatedCheckBoxData;
    });
  };

  return (
    <div className='App'>
      {/* //FIXME: pick this up after defining the state vars */}
      {/* Strength  -> display the strength of the password */}
      <div className='container'>
        <div className='passwordHeader flex-display'>
          {/* Header -> displays the password and the copy button */}
          <div className='passwordDisplay'>{password}</div>
          <Button
            customClassName='copyButton'
            onClick={handleCopyClick}
            text={copyButtonText}
          />
        </div>

        <div className='characterLength flex-display'>
          {/* Character Length -> displays the length of the password */}
          <div>Character Length</div>
          <div>{length}</div>
        </div>

        <div className='sliderParent'>
          {/* slider for length input */}
          <input
            className='slider'
            value={length}
            type='range'
            min='4'
            max='20'
            onChange={handleSliderChange}
          />
        </div>

        <div className='checkboxes'>
          {/* Checkboxes  -> displays all the checbox conditions */}
          {checkBoxData.map(({ title, key, checked }) => (
            <Checkbox
              title={title}
              checked={checked}
              uniqueKey={key}
              handleCheckBoxClick={handleCheckBoxClick}
            />
          ))}
        </div>

        {errorMessage && <div className='errorMessage'>{errorMessage}</div>}

        <div className='generatePassword'>
          {/* Generate password button */}
          <Button
            customClassName='generatePasswordButton'
            text='generate password'
            onClick={handleGeneratePassword}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
