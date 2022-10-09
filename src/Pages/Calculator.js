import React, { useState } from 'react';

const Calculator = () => {
  const [answer, setAnswer] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    setAnswer(answer.concat(e.target.name));
  };
  const isClear = () => {
    setAnswer('');
  };
  const isBackSpace = () => {
    setAnswer(answer.substring(0, answer.length - 1));
  };

  const isCalculate = () => {
    try {
      setAnswer(eval(answer));
    } catch (err) {
      setAnswer('error');
    }
  };

  const [theme, setTheme] = useState('dark');

  const handleToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    if (theme === 'light') {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = 'black';
    }
  };

  return (
    <>
      <h1>
        p<span>DEv</span>
      </h1>

      <div className="container">
        <button onClick={handleToggle} id="btn" style={{ textAlign: 'center' }}>
          {theme}
        </button>
        <form>
          <input type="text" value={answer} />
        </form>

        <div className="btn-keys">
          <button className="focus" onClick={isClear} id="clear">
            AC
          </button>
          <button className="focus" id="backspace" onClick={isBackSpace}>
            C
          </button>
          <button className="focus" name="/" onClick={handleClick} id="button">
            &divide;
          </button>
          <button name="7" id="button" onClick={handleClick}>
            7
          </button>
          <button name="8" id="button" onClick={handleClick}>
            8
          </button>
          <button name="9" id="button" onClick={handleClick}>
            9
          </button>
          <button className="focus" name="*" id="button" onClick={handleClick}>
            &times;
          </button>
          <button name="4" id="button" onClick={handleClick}>
            4
          </button>
          <button name="5" id="button" onClick={handleClick}>
            5
          </button>
          <button name="6" id="button" onClick={handleClick}>
            6
          </button>
          <button className="focus" name="-" id="button" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" id="button" onClick={handleClick}>
            1
          </button>
          <button name="2" id="button" onClick={handleClick}>
            2
          </button>
          <button name="3" id="button" onClick={handleClick}>
            3
          </button>
          <button className="focus" name="+" id="button" onClick={handleClick}>
            +
          </button>
          <button name="0" id="button" onClick={handleClick}>
            0
          </button>
          <button className="focus" name="." id="button" onClick={handleClick}>
            .
          </button>
          <button className="focus" name="=" onClick={isCalculate} id="equals">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
