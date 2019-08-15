import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'

// initial state
const initialState = {
  groceries: []
}

let nextId = 0

// action types
const ADD_GROCERY = 'ADD_GROCERY'
const TOGGLE_GROCERY = 'TOGGLE_GROCERY'

// action creators
export const addGrocery = text => ({type: ADD_GROCERY, id: nextId++, text})
export const toggleGrocery = id => ({type: TOGGLE_GROCERY, id})

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
export default store
