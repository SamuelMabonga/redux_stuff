import { ADD_QUANTITY, ADD_TO_CART, FETCH_MOVIES, SUB_QUANTITY, EMPTY_CART, REMOVE_FROM_CART } from '../actions/types'

const initialState = {
  movies: [], 
  // popularMovies : [],
  // latestMovies : [],
  // tvShows : []

}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      console.log('FETCH_MOVIES reducer >>>')
      const newMovies = action.payload
      // console.log(newMovies)

      return {
        ...state,
        movies : [...newMovies],
        
      }
    
    case ADD_TO_CART:
      console.log('ADD_TO_CART reducer >>>')
      return {
        ...state,
        movies : state.movies.map(movie => 
          movie.id === action.id 
            ? {
                ...movie, 
                selected : true
              }
            : movie
        )
      }

    case REMOVE_FROM_CART:
      console.log('REMOVE_FROM_CART reducer >>>')
      return {
        ...state,
        movies : state.movies.map(movie => 
          movie.id === action.id 
            ? {
                ...movie, 
                selected : false,
                quantity : 1
              }
            : movie
        )
      }

    case ADD_QUANTITY:
      console.log('ADD_QUANTITY reducer >>>')
      return {
        ...state,
        movies : state.movies.map(movie => 
          movie.id === action.id 
            ? {
                ...movie, 
                quantity : movie.quantity + 1
              }
            : movie
        )
      }

    case SUB_QUANTITY:
      console.log('SUB_QUANTITY reducer >>>')
      return {
        ...state,
        movies : state.movies.map(movie => 
          movie.id === action.id 
            ? {
                ...movie, 
                quantity : movie.quantity !== 1 ? movie.quantity - 1 : 1, 
              }
            : movie
        )
      }
    
    case EMPTY_CART:
      console.log('EMPTY_CART reducer >>>')
      return {
        ...state,
        movies : state.movies.map(movie => 
          movie.selected 
            ? {
                ...movie, 
                selected : false,
                quantity : 1, 
              }
            : movie
        )
      }

    default:
      return state
  }
}