import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { themes } from '../../contexts/ThemeValues'
import { Button } from '../button/Button'

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div style={{ background: theme.background, color: theme.color, padding: '20px' }}>
            <p>Este é o tema atual</p>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
                Trocar tema
            </Button>
        </div>
    )
}
