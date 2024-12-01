//! Funtion update data on UI
function updateUI(name, img, bio) {
    // Get element from HTML
    const name_element = document.getElementById('pokemon_name');
    const img_element = document.getElementById('pokemon_img');
    const bio_element = document.getElementById('pokemon_bio');

    // Update data
    name_element.textContent = name.toUpperCase();
    img_element.src = img;
    bio_element.innerText = bio;
}

//! Funtion search
function search_pokemon(pokemon_name) {
    // Set root url
    const root_url = "https://pokeapi.co/api/v2/pokemon/";
    // Call API
    const promise = fetch(root_url + pokemon_name.toLowerCase(), {
        method: 'GET'
    })
    promise.then(function(json){
        // Chuyển kiển Json -> JS
        return json.json();
    }).then(function(pokemonData){
        const name = pokemonData.name;
        const image = pokemonData.sprites.other["official-artwork"].front_default;
        const bio = `Weight: ${pokemonData.weight}`;
        // Update UI
        updateUI(name, image, bio);
    }).catch(function(error){
        alert("Không tìm thấy nhân vật này");
    })
}
// search_pokemon("pikachu");

//! Bắt sự kiện cho button search
document.getElementById('search_btn').addEventListener('click', function(e){
    // Không cho website load the mặc địch
    e.preventDefault();
    // Lấy dữ liệu từ input
    const pokemon_name = document.getElementById('search_inp').value.trim();
    // Nếu không có dữ liệu
    if (!pokemon_name) {
        alert("Vui lòng nhập tên nhân vật");
    } else {
        search_pokemon(pokemon_name);
    }
})