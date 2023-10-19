const input = document.querySelector('#pokemon-name');
const pokemonTitle = document.querySelector('#pokemon h2');
const pokemonSprite = document.querySelector('#pokemon img');

const baseUrl = 'https://pokeapi.co/api/v2';

document.querySelector('#pokemon-search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    fetch(`${baseUrl}/pokemon/${input.value}`).then(response => response.json()).then(response => {
        pokemonTitle.textContent = response.name;
        pokemonSprite.src = response.sprites.front_default;
    }).catch(error => {
        console.log(error);
    });
});