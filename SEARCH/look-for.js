// Se genera una constante para poder seleccionar el form
// del buscador.
//
// Luego se crea  un constante con un evento, donde se piden
// los nombres y los id, para poder buscarlos despues

const searching = document.querySelector("form") ;

const searchEvent = (event) =>{
   event.preventDefault();  //El preventDefault() método cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.
   const pokeName = event.target[0].value; // El event.target se puede usar para implementar una delegación del evento.
   const pokeId = event.target[0].value;
   localStorage.setItem("pokeName" , pokeName, "pokeId" , pokeId); //Guardad info dentro del local storage (setItem), el valor entre comillas se obtiene lo que se quiere modificar/actualizar, y en el segundo, el valor que se le quiere dar al primero.
   setTimeout(function() {
        location.href = "/MAIN/main.html";
    }, 1000);
}


// Se le asigna un evento a la constante searching
// para que cuando se le haga click se ejecute
// la funcion 'searchEvent'.

searching.addEventListener('submit', searchEvent);

