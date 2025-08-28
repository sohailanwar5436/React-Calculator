import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(value + e.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  const handleCalculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className='container'>
      <div className="calculator">
        <form className='form' action="">
          <div className='display'>
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="7" onClick={handleClick} />
            <input type="button" value="8" onClick={handleClick} />
            <input type="button" value="9" onClick={handleClick} />
            <input type="button" value="/" onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="4" onClick={handleClick} />
            <input type="button" value="5" onClick={handleClick} />
            <input type="button" value="6" onClick={handleClick} />
            <input type="button" value="*" onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="3" onClick={handleClick} />
            <input type="button" value="2" onClick={handleClick} />
            <input type="button" value="1" onClick={handleClick} />
            <input type="button" value="-" onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="C" onClick={handleClear} />
            <input type="button" value="0" onClick={handleClick} />
            <input type="button" value="=" onClick={handleCalculate} />
            <input type="button" value="+" onClick={handleClick} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;