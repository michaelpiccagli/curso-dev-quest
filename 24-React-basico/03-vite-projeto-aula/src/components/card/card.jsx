import React from 'react'
import './card.css'

//short rend notation
const Card = ({tittle}) => {
    return (
        <div className="card">
            <h3>{tittle}</h3>
            <p>esse é um texto do card</p>
        </div>
    )
}

// const Card = (props) => {
//     return (
//         <div className="card">
//             <h3>{props.tittle}</h3>
//             <p>esse é um texto do card</p>
//         </div>
//     )
// }

// class Card extends React.Component {
//     render() {
//         return (
//             <div className= "card">
//                 <h3>Título</h3>
//                 <p>Esse é um texto do card</p>
//             </div>
//         )
//     }
// }

export default Card