import React from 'react';
import { Button } from 'semantic-ui-react'

interface Props {
    className: string;
    value: string;
    onClick: () => void;
}
const Keys = ({ className, value, onClick }: Props) => {
    return (
        <Button className={className} onClick={onClick}>
            {value}
        </Button>
    )
}

export default Keys;