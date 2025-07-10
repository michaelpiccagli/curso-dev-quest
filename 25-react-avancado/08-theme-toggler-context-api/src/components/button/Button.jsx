import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

export const Button = (props) => {
    const { theme } = useContext(ThemeContext)

    return (
        <button
            {...props}
            style={{ color: theme.color, backgroundColor: theme.background }}
        >
            {props.children}
        </button>
    )
}
