import { useState } from "react";

const Form = (props) => {

    const [inputs, setInputs] = useState({
        image: "",
        value: "",
        suit: ""
    })

    const handleInputChange = (event) => {
        const { target } = event
        const { name } = target
        const { value } = target
       setInputs({
        ...inputs,
        [name]: value
       }) 
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addCard(inputs)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="image">Endereço da imagem da carta</label>
                <input type="text" id="image" name="image" onChange={handleInputChange} value={setInputs.image}/>
            </div>
            <div>
                <label htmlFor="value">Nome da carta</label>
                <input type="text" id="value" name="name" onChange={handleInputChange} value={setInputs.value}/>
            </div>
            <div>
                <label htmlFor="suit">Naipe</label>
                <input type="text" id="suit" name="suit" onChange={handleInputChange} value={setInputs.suit}/>
            </div>
            <input type="submit" />
        </form>
        </>
    )
}

export default Form;