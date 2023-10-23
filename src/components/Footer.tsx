import React from 'react'

type Props = {
    name: string;
}

const Footer: React.FC<Props> = ({ name }) => {
    return (
        <div>Footer {name}</div>
    )
}

export default Footer