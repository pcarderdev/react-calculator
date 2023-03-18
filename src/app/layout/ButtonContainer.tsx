import React from 'react';

interface Props {
    children: JSX.Element[];
}

const ButtonContainer = ({ children }: Props) => {
    return (
        <div className="button-container">
            {children}
        </div>
    )
}

export default ButtonContainer;