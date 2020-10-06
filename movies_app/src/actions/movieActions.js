import { ADD_QUANTITY, ADD_TO_CART, FETCH_MOVIES, REMOVE_FROM_CART, SUB_QUANTITY, EMPTY_CART } from './types'

// const movieUrls = [
//   { 
//     name : 'popular',
//     link : 'https://api.themoviedb.org/3/movie/popular?api_key=ebb6fea526ae6fedd22bbfce0ae8199a&language=en-US&page=1'
//   },
//   {
//     name : 'latest',
//     link : 'https://api.themoviedb.org/3/movie/top_rated?api_key=ebb6fea526ae6fedd22bbfce0ae8199a&language=en-US&page=1'
//   },
//   {
//     name : 'tvShows',
//     link : 'https://api.themoviedb.org/3/movie/upcoming?api_key=ebb6fea526ae6fedd22bbfce0ae8199a&language=en-US&page=1'
//   }
// ]

export const fetchMovies = (urls) => dispatch => {
  // console.log('Fetch Movies Action')
  const movies = []

  Promise.all([
    fetch(urls[0].link),
    fetch(urls[1].link),
    fetch(urls[2].link)
  ])
    .then(responses => {
      // Get a JSON object from each of the responses
      // console.log('parsing responses')
      // console.log(responses)
      return Promise.all(responses.map(response => response.json()))
    })
    .then(data => {
      let counter = 0

      // console.log('data')
      // console.log(data)

      data.forEach(item => {
        // console.log(`Data Item >>> ${counter}`)
        // console.log(item.results)

        const moviesList = item.results.map(movie => {
          return {
            id : movie.id,
            title : movie.title,
            poster_path : movie.poster_path,
            release_date : movie.release_date,
            rating : movie.vote_average,
            quantity : 1,
            selected : false,
            category : urls[counter].name
          }
        })

        movies.push(...moviesList)

        // console.log(`counter >>> ${counter}`)
        // console.log(movies)

        counter ++

        dispatch({
          type: FETCH_MOVIES,
          payload: movies
        })
      })
    })
}

export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  }
}

export const removeFromCart = id => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}

export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    id
  }
}

export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    id
  }
}

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  }
}