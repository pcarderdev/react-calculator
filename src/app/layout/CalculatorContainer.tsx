import React from 'react';
import Display from './Display';
import ButtonContainer from './ButtonContainer';

interface Props {
    children: JSX.Element[];
}

const CalculatorContainer = ({ children }: Props) => {
    return (
        <>
            <div className="calc-container">
                {children}
            </div>
        </>

    )
}

export default CalculatorContainer;