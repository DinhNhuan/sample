import React from 'react'

type Props = {
    name: string;
}

const Header: React.FC<Props> = ({ name }) => {
    return (
        <div>Header {name}</div>
    )
}

export default Header