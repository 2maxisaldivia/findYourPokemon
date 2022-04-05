// En este archivo, se obtiene la informacion del pokemon necesaria para
//para poder realizar la poke card.

// Lo primero que se hace es crear un nuevo objeto con la info proveniente
// del llamado a la api.
//
// Luego se generan constantes segun la info. y se utiliza querySelector para
// para guardar esa info. de la api en las diferentes etiquetas HTML.
//
//----------------------------------------------------------------------------

const colorCard = document.querySelector('.poke-card-container');

const PokeInfo = new dataApiProcessor();
PokeInfo.getData().then((pokemon) => {
    console.log(pokemon);
    
    const pokeId = document.querySelector('.pokemon-id');
    pokeId.innerHTML = pokemon.id;
    //  Verificacion de los datos ingresados del usuario, dependiendo el NOMBRE que ingrese.
    if(pokemon.id === undefined){
        document.querySelector('.hidden').style.display = 'block';
        document.querySelector('.show').style.display = 'none';
    }
    
    const pokeName = document.querySelector('.pokemon-name-en');
    pokeName.innerHTML = pokemon.name.english;

    const pokeNameJp = document.querySelector('.pokemon-name-jpn');
    pokeNameJp.innerHTML = pokemon.name.japanese;
    
    const pokeNameCh = document.querySelector('.pokemon-name-chn');
    pokeNameCh.innerHTML = pokemon.name.chinese;
    
    const pokeNameFr = document.querySelector('.pokemon-name-fr');
    pokeNameFr.innerHTML = pokemon.name.french;
    
    const pokeImg = document.querySelector('.pokemon-img');
    pokeImg.src = pokemon.hires;
    
    const pokeSpecies = document.querySelector('.pokemon-species');
    pokeSpecies.innerHTML = pokemon.species;
    
    const pokeDescription = document.querySelector('.pokemon-description');
    pokeDescription.innerHTML = pokemon.description;
    
    const pokeType = document.querySelector('.pokemon-type');
    pokeType.innerHTML = pokemon.type[0];
    
    //Cambia el color del fondo de la carta segun el tipo de pokemon que sea.
    if (pokemon.type[0] === "Electric"){
        colorCard.style.backgroundColor = '#FFDE52';

    } else if (pokemon.type[0] === "Normal"){
        colorCard.style.backgroundColor = '#FFFFFF';
    
    } else if (pokemon.type[0] === "Fighting"){
        colorCard.style.backgroundColor = '#FD9898';
    
    } else if(pokemon.type[0] === "Flying"){
        colorCard.style.backgroundColor = '#B3C8EA';
    
    } else if(pokemon.type[0] === "Poison"){
        colorCard.style.backgroundColor = '#34B550';
    
    } else if(pokemon.type[0] === "Fire"){
        colorCard.style.backgroundColor = '#ff3838';
    
    } else if (pokemon.type[0] === "Bug"){
        colorCard.style.backgroundColor = '#BEFFAD';

    } else if (pokemon.type[0] === "Water"){
        colorCard.style.backgroundColor = '#3CC7DA';
    
    } else if(pokemon.type[0] === "Ice"){
        colorCard.style.backgroundColor = '#C5DBFF';
    
    } else if(pokemon.type[0] === "Ground"){
        colorCard.style.backgroundColor = '#D6C28B';
    
    } else if(pokemon.type[0] === "Rock"){
        colorCard.style.backgroundColor = '#746D5A';
    
    } else if (pokemon.type[0] === "Ghost"){
        colorCard.style.backgroundColor = '#D8A7E9';
    
    } else if (pokemon.type[0] === "Steel"){
        colorCard.style.backgroundColor = '#C1CCDD';
    
    } else if(pokemon.type[0] === "Grass"){
        colorCard.style.backgroundColor = '#9EDA3C';
    
    } else if(pokemon.type[0] === "Psychic"){
        colorCard.style.backgroundColor = '#D8A7E9';
    
    } else if(pokemon.type[0] === "Dragon"){
        colorCard.style.backgroundColor = '#CA3030';
    
    } else if (pokemon.type[0] === "Dark"){
        colorCard.style.backgroundColor = '#518894';
    
    } else if (pokemon.type[0] === "Fairy"){
        colorCard.style.backgroundColor = '#00FF75';
    
    }else if (pokemon.type[0] === "Home"){
        colorCard.style.backgroundColor = 'rgba(196, 196, 196, 0)';
    
    }
    
    const pokeWeight = document.querySelector(".pokemon-weight");
    pokeWeight.innerHTML = pokemon.profile.weight;

    const pokeHeight = document.querySelector(".pokemon-height");
    pokeHeight.innerHTML = pokemon.profile.height;
    
    const pokeHp = document.querySelector(".pokemon-hp");
    pokeHp.innerHTML = pokemon.base.HP;
    
    const pokeAttack = document.querySelector('.pokemon-attack');
    pokeAttack.innerHTML = pokemon.base.Attack;

    const pokeDefense = document.querySelector(".pokemon-defense");
    pokeDefense.innerHTML = pokemon.base.Defense;
    
    // const pokeSpAttack = document.querySelector(".pokemon-sp-attack");
    // pokeSpAttack.innerHTML = pokemon.base.SpAttack;

    // const pokeSpDefense = document.querySelector(".pokemon-sp-defense");
    // pokeSpDefense.innerHTML = pokemon.base.SpDefense;
    
    const pokeSpeed = document.querySelector(".pokemon-speed");
    pokeSpeed.innerHTML = pokemon.base.Speed;

})

// Esta funcion se le asigna al botón "SEARCH AGAIN" para que,
// cuando se le haga click, vuelva la pagina del buscador.

function backTosearcher(){
    location.href = "/SEARCH/look-for.html";
}

