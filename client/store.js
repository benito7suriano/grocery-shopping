import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'

// initial state
const initialState = {
  groceries: [],
  visibilityFilter: 'SHOW_ALL'
}

let nextId = 0

// action types
const ADD_GROCERY = 'ADD_GROCERY'
const TOGGLE_GROCERY = 'TOGGLE_GROCERY'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

const SHOW_ALL = 'SHOW_ALL'
const SHOW_BOUGHT = 'SHOW_BOUGHT'
const SHOW_ACTIVE = 'SHOW_ACTIVE'

// action creators
export const addGrocery = text => ({type: ADD_GROCERY, id: nextId++, text})
export const toggleGrocery = id => ({type: TOGGLE_GROCERY, id})
export const setVisibilityFilter = value => ({type: SET_VISIBILITY_FILTER, value})

// reducer
const reducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_GROCERY:
      console.log('adding grocery...')
      const newGrocery = {
        id: action.id,
        text: action.text,
        bought: false
      }

      return { ...state, groceries: [...state.groceries, newGrocery] }

    case TOGGLE_GROCERY:
      const groceries = state.groceries.map(grocery => {
        if(grocery.id === action.id) {
          return {...grocery, bought: !grocery.bought}
        } else {
          return grocery
        }
      })

      return {...state, groceries}

    case SET_VISIBILITY_FILTER:
      return {...state, visibilityFilter: action.value}
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware))

// Manual test (temporary hard coded dispatches just for fun)
// store.dispatch(addGrocery('milk'))
// store.dispatch(addGrocery('cookies'))
// store.dispatch(toggleGrocery(0))
// store.dispatch(toggleGrocery(0))
// store.dispatch(setVisibilityFilter(SHOW_ACTIVE))

export default store
