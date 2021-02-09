const searchSongs = () => {
    const searchText = document.getElementById('search-field').value
    const url = `https://api.lyrics.ovh/suggest/:${searchText}`
    //load data
    fetch(url)
    .then(res => res.json())
    .then(data => displaySongs(data.data))
}

const displaySongs = songs => {
    const songContainer = document.getElementById('song-container')
    songContainer.innerHTML = "";
    songs.forEach(song => {
        const songDiv = document.createElement('div')
        songDiv.className = "single-result row align-items-center my-3 p-3";
        songDiv.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
            <audio controls
            src="${song.preview}">
            </audio>

        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick="getLyric('${song.artist.name}', '${song.title}')" class="btn btn-success">Get Lyrics</button>
        </div>
    `
        songContainer.appendChild(songDiv)
    })
}


const getLyric = (artist, title) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayLyrics(data.lyrics))
}


const displayLyrics = lyrics => {
    const lyricsDiv = document.getElementById('lyrics')
    lyricsDiv.innerText = lyrics;
}


//trigger search key by pressing "Enter"
inputField = document.getElementById('search-field');
inputField.addEventListener("keyup", function(event) {
    if (event.key === "Enter") { //create event for the key Enter
        event.preventDefault();
        document.getElementById('search-songs').click();
    }
})
