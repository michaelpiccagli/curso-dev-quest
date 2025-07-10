import './App.css'
import { ThemeProvider } from './contexts/ThemeProvider'
import { ThemeTogglerButton } from './components/theme-toggler-button/ThemeTogglerButton'

function App() {
    return (
        <ThemeProvider>
            <ThemeTogglerButton />
        </ThemeProvider>
    )
}

export default App
