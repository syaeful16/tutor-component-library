import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode | ReactNode[]
}

const Button:FC<Props> = ({ children }) => {
    return (
        <button>
            {children}
        </button>
    )
}

export default Button