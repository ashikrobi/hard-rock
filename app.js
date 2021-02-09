const searchSongs = () => {
    const searchText = document.getElementById('search-field').value
    const url = `https://api.lyrics.ovh/suggest/:${searchText}`
    //load data
    fetch(url)
    .then(res => res.json())
    .then(data => displaySongs(data.data))
}

const displaySongs = songs => {
    console.log(songs);
}


//trigger search key by pressing "Enter"
inputField = document.getElementById('search-field');
inputField.addEventListener("keyup", function(event) {
    if (event.key === "Enter") { //create event for the key Enter
        event.preventDefault();
        document.getElementById('search-songs').click();
    }
})
