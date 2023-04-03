import { PasswordLevelList } from 'components/PasswordLevelList/PasswordLevelList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState } from 'react';

export const PasswordCheckApp = () => {
  const [simpleColor, setSimpleColor] = useState('grey');
  const [mediumColor, setMediumColor] = useState('grey');
  const [secureColor, setSecureColor] = useState('grey');

  const lettersRegexp = /[A-Za-z]/gi;
  const numbersRegexp = /[0-9]/gi;
  const symbolsRegexp = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/gi;

  const onChange = value => {
    const lettersContain = value.match(lettersRegexp);
    const numbersContain = value.match(numbersRegexp);
    const symbolsContain = value.match(symbolsRegexp);

    const isSimplePassword = lettersContain || numbersContain || symbolsContain;
    const isMediumPassword =
      (numbersContain && lettersContain) ||
      (symbolsContain && numbersContain) ||
      (lettersContain && symbolsContain);
    const isSecurePassword = numbersContain && lettersContain && symbolsContain;

    if (value.length < 8 && value.length !== 0) {
      setSimpleColor('red');
      setMediumColor('red');
      setSecureColor('red');
      return;
    }
    if (isSimplePassword) {
      setSimpleColor('red');
      setMediumColor('grey');
      setSecureColor('grey');
    }
    if (isMediumPassword) {
      setSimpleColor('yellow');
      setMediumColor('yellow');
    }
    if (isSecurePassword) {
      setSimpleColor('green');
      setMediumColor('green');
      setSecureColor('green');
    }

    if (value === '') {
      setSimpleColor('grey');
      setMediumColor('grey');
      setSecureColor('grey');
    }
  };

  return (
    <>
      <SearchForm onChange={onChange} />
      <PasswordLevelList
        simpleColor={simpleColor}
        mediumColor={mediumColor}
        secureColor={secureColor}
      />
    </>
  );
};
