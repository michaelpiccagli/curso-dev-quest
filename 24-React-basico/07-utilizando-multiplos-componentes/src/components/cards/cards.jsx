import Card from "../card/card"

const Cards = () => {
    return (
        <div>
            <h2>Meus cards</h2>
            <div>
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
            </div>
        </div>
    )
}

export default Cards