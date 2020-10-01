import { FETCH_MOVIES } from './types'

export const fetchMovies = () => dispatch => {
  console.log('Fetching movies >>>')

  fetch('https://api.themoviedb.org/3/movie/popular?api_key=ebb6fea526ae6fedd22bbfce0ae8199a&language=en-US&page=1')
    .then(res => res.json())
    .then(data => {
      // console.log(data.results)

      const movies = data.results.map(movie => {
        return {
          id : movie.id,
          title : movie.title,
          poster_path : movie.poster_path,
          release_date : movie.release_date,
          rating : movie.vote_average
        }
      })
      
      // console.log(movies)

      dispatch({
        type: FETCH_MOVIES,
        payload: movies
      })
    })
}