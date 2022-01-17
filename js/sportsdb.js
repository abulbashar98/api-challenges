

const searchPlayer = () => {
    const searchInputField = document.getElementById('search-field')
    searchText = searchInputField.value;

    if (searchText == '') {
        console.log('Please insert favorite players name')
    }
    else {
        loadPlayerByName(searchText)
    }

}

const loadPlayerByName = async playerName => {

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${playerName}`

    const response = await fetch(url);
    const player = await response.json();
    displayPlayer(player.player[0])
}

const displayPlayer = info => {

    console.log(info)

    const playerContainer = document.getElementById('search-result')

    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src="${info.strCutout}" class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="text-light bg-dark">${info.strPlayer}</h3>
    <p class="card-text">${info.strDescriptionEN.slice(0, 700)}............../p>
    <a href="${info.strInstagram}" class="btn btn-primary">Instagram</a>
  </div>
</div>
    `
    playerContainer.appendChild(div)

};


