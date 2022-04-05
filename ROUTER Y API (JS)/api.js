// Llamar a la api para poder luego de eso procesar los datos.
// Llamado asincronico.

class dataApiProcessor {

    async getData() {
        const pokeName = localStorage.getItem("pokeName") ; // Local storage es una herramient que permite el almacenamiento de datos dentro del navegor del usuario. 
        const data = await fetch( `https://app.pokemon-api.xyz/pokemon/${pokeName}`); //Trae los nombres de los pokemons para poder buscarlos posteriormente.
        const json = await data.json();
        return json;
    }
}

