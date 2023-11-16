const joke = document.getElementById('addJoke')

const getJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random'
    let response = await fetch(url)
    let commits = await response.json()
    joke.textContent = commits.value

}

const button = document.getElementById('btn')
button.addEventListener('click', () => {getJoke()})
