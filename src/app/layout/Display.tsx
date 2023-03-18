import React from 'react';
import './App.css';

interface Props {
    value: string;
}

const Display = ({ value }: Props) => {
    return (
        <>
            <div className="display">
                {value}
            </div>
        </>
    )
}

export default Display;