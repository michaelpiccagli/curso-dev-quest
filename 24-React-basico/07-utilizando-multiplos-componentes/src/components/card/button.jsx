import "./button.css"

const Button = ({ label = 'clique aqui' }) => {
    return (
      <button className='btn'>{label}</button>
    );
  };
  
  export default Button;