import './App.css'
import Button from "./components/card/button"
import Card from "./components/card/card"

function App() {
  return (
    <>
      <Card>
        <h3>Título card 1</h3>
        <p>esse é um texto do card</p>
      </Card>
      <Card>
        <h3>Título card 2</h3>
        <p>esse é um texto do card</p>
      </Card>
      <Card>
        <h3>Título card 3</h3>
        <p>esse é um texto do card</p>
      </Card>
      <Button label="Baixar CV"/>
      <Button />
    </>
  )
}

export default App
