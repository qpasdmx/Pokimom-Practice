function m() {
    fetch("https://pokeapi.co/api/v2/pokemon-shape").then(res => res.json());
}
var b = a();
console.log(b);