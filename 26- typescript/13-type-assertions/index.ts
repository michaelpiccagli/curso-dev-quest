//Especificando tipos com Type Assertions

const button = document.getElementById('button') as HTMLButtonElement;

button.addEventListener('click', event => {
   const mouseEvent = event as MouseEvent;
   console.log(mouseEvent.clientX, mouseEvent.clientY);
})