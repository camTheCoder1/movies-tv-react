
const renderMovieList = (movieList) => {
    const movieListEl = document.getElementById('movie-list')
    // clear previous render
    movieListEl.innerHTML = ''
    for (let i = 0; i < movieList.length; i++) {
      const listItem = document.createElement('div')
      listItem.className = 'movie-list-item'
      listItem.innerText = movieList[i]
      movieListEl.appendChild(listItem)
    }
  }
  
  renderMovieList(movieList)
  
  
  
  const movieListSearchBarEl = document.getElementById('movie-list-search-bar')
  const onMovieSearch = (event) => {
    console.log('onMovieSearch -> event.target.value', event.target.value)
    const lowerCaseUserInput = event.target.value.toLocaleLowerCase()
  
    // if input is empty then render all movies
    if (lowerCaseUserInput.trim().length === 0) {
      renderMovieList(movieList)
    }
  
    const filteredMovies = []
    for (let i = 0; i < movieList.length; i++) {
      const lowerCaseMovie = movieList[i].trim().toLocaleLowerCase()
      console.log('lowerCaseMovie', lowerCaseMovie)
      if (lowerCaseMovie.includes(lowerCaseUserInput)) {
        filteredMovies.push(movieList[i])
      }
    }
  
    renderMovieList(filteredMovies)
  
  }
  movieListSearchBarEl.addEventListener('keydown', onMovieSearch)