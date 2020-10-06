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
  console.log('Fetch Movies Action')
  const movies = []

  Promise.all([
    fetch(urls[0].link),
    fetch(urls[1].link),
    fetch(urls[2].link)
  ])
    .then(responses => {
      // Get a JSON object from each of the responses
      console.log('parsing responses')
      console.log(responses)
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

        console.log(`counter >>> ${counter}`)
        // console.log(movies)

        counter ++

        dispatch({
          type: FETCH_MOVIES,
          payload: movies
        })
      })
    })


  // urls.map(url => {
  //   // console.log(`FETCHING MOVIES >>>`)
  //   fetch(url.link)
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.log(`url >>> ${url.link}`)
  //       // console.log(data.results)
  //       const items = data.results.map(item => {
  //         return {
  //           id : item.id,
  //           title : item.title,
  //           poster_path : item.poster_path,
  //           release_date : item.release_date,
  //           rating : item.vote_average,
  //           quantity : 1,
  //           selected : false,
  //           category : url.name
  //         }
  //       })

  //       movies.push(...items)
  //     })
  // })

  // console.log(`FETCH MOVIE ACTION`)
  // console.log(JSON.stringify(movies))
  // console.log(typeof(movies))

  // dispatch({
  //   type: FETCH_MOVIES,
  //   payload: movies
  // })
}

// export const fetchPopularMovie = () => dispatch => {
//   console.log('Fetching popular movies >>>')

//   fetch('https://api.themoviedb.org/3/movie/popular?api_key=ebb6fea526ae6fedd22bbfce0ae8199a&language=en-US&page=1')
//     .then(res => res.json())
//     .then(data => {
//       // console.log(data.results)

//       const movies = data.results.map(movie => {
//         return {
//           id : movie.id,
//           title : movie.title,
//           poster_path : movie.poster_path,
//           release_date : movie.release_date,
//           rating : movie.vote_average,
//           quantity : 1,
//           selected : false,
//           category : 'popular'
//         }
//       })
      
//       // console.log(movies)

//       dispatch({
//         type: FETCH_POPULAR_MOVIES,
//         payload: movies
//       })
//     })
// }

// export const fetchLatestMovies = () => dispatch => {
//   console.log('Fetching latest movies >>>')

//   fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=ebb6fea526ae6fedd22bbfce0ae8199a&language=en-US&page=1')
//     .then(res => res.json())
//     .then(data => {
//       // console.log(data.results)

//       const movies = data.results.map(movie => {
//         return {
//           id : movie.id,
//           title : movie.title,
//           poster_path : movie.poster_path,
//           release_date : movie.release_date,
//           rating : movie.vote_average,
//           quantity : 1,
//           selected : false, 
//           category : 'latest'
//         }
//       })
      
//       // console.log(movies)

//       dispatch({
//         type: FETCH_LATEST_MOVIES,
//         payload: movies
//       })
//     })
// }

// export const fetchTvShows = () => dispatch => {
//   console.log('Fetching TV shows >>>')

//   fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=ebb6fea526ae6fedd22bbfce0ae8199a&language=en-US&page=1')
//     .then(res => res.json())
//     .then(data => {
//       // console.log(data.results)

//       const movies = data.results.map(movie => {
//         return {
//           id : movie.id,
//           title : movie.title,
//           poster_path : movie.poster_path,
//           release_date : movie.release_date,
//           rating : movie.vote_average,
//           quantity : 1,
//           selected : false,
//           category : 'tvShows'
//         }
//       })

//       // console.log(movies)   

//       dispatch({
//         type: FETCH_TV_SHOWS,
//         payload: movies
//       })
//     })
// }

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