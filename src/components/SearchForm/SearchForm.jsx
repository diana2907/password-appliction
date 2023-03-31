import { useState } from 'react';

export const SearchForm = () => {
  const lettersRegexp = /[A-Za-z]/gi;
  const numbersRegexp = /[0-9]/gi;
  const symbolsRegexp = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/gi;

  const [simpleColor, setSimpleColor] = useState('grey');
  const [mediumColor, setMediumColor] = useState('grey');
  const [secureColor, setSecureColor] = useState('grey');

  const onChange = value => {
    const lettersContain = value.match(lettersRegexp);
    const numbersContain = value.match(numbersRegexp);
    const symbolsContain = value.match(symbolsRegexp);

    if (value.length < 8) {
      setSimpleColor('red');
      setMediumColor('red');
      setSecureColor('red');
    } else {
      if (lettersContain || numbersContain || symbolsContain) {
        setSimpleColor('red');
        setMediumColor('grey');
        setSecureColor('grey');
      }
      if (
        (numbersContain && lettersContain) ||
        (symbolsContain && numbersContain) ||
        (lettersContain && symbolsContain)
      ) {
        setSimpleColor('yellow');
        setMediumColor('yellow');
        setSecureColor('grey');
      }
      if (numbersContain && lettersContain && symbolsContain) {
        setSimpleColor('green');
        setMediumColor('green');
        setSecureColor('green');
      }
    }
    if (value === '') {
      setSimpleColor('grey');
      setMediumColor('grey');
      setSecureColor('grey');
    }
  };

  return (
    <div className="container">
      <div className="form">
        <input
          className="input"
          type="password"
          onChange={e => onChange(e.target.value)}
        />
        {simpleColor === 'red' &&
          mediumColor === 'red' &&
          secureColor === 'red' && (
            <p className="text">*the password must be at least 8 characters</p>
          )}
      </div>

      <ul>
        <li style={{ color: simpleColor }} className="password-level">
          The password is easy
        </li>
        <li style={{ color: mediumColor }} className="password-level">
          The password is medium
        </li>
        <li style={{ color: secureColor }} className="password-level">
          The password is strong
        </li>
      </ul>
    </div>
  );
};
