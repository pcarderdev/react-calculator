import React from 'react';
import './App.css';
import CalculatorContainer from './CalculatorContainer';
import Display from './Display';
import ButtonContainer from './ButtonContainer';
import Keys from './Keys';

const btnValues: string[][] = [
  ["C", "+-", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["3", "2", "1", "+"],
  ["0", ".", "="]
]

function getClassName(buttonVal: string) : string {
  if (buttonVal === "0") 
    return 'zero ui button circular'
  else
    return 'ui button circular'
}


function App() {
  return (
    <CalculatorContainer>
      <Display value="0" />
      <ButtonContainer>
        {btnValues.flat().map((btn, i) => {
          return (
            <Keys
              key={i} 
              className={btn === "0" ? "zero ui button circular" : "ui button circular"}
              value={btn}
              onClick={() => {
                console.log(`${btn} was clicked!`);
              }}
            />
          );
        }
        )}
      </ButtonContainer>
    </CalculatorContainer>
  )
}

export default App;
