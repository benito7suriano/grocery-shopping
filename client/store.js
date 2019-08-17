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
const SET_QUANTITY = 'SET_QUANTITY'

const SHOW_ALL = 'SHOW_ALL'
const SHOW_BOUGHT = 'SHOW_BOUGHT'
const SHOW_ACTIVE = 'SHOW_ACTIVE'

// action creators
export const addGrocery = text => ({type: ADD_GROCERY, id: nextId++, text})
export const toggleGrocery = id => ({type: TOGGLE_GROCERY, id})
export const setVisibilityFilter = value => ({type: SET_VISIBILITY_FILTER, value})
export const setQuantity = (id, quant) => ({ type: SET_QUANTITY, id, quant})

// reducer
const reducer = (state = initialState, action) => {
  let groceries

  switch(action.type) {
    case ADD_GROCERY:
      console.log('adding grocery...')
      const newGrocery = {
        id: action.id,
        text: action.text,
        quantity: 1,
        bought: false
      }

      return { ...state, groceries: [...state.groceries, newGrocery] }

    case TOGGLE_GROCERY:
      groceries = state.groceries.map(grocery => {
        if(grocery.id === action.id) {
          return {...grocery, bought: !grocery.bought}
        } else {
          return grocery
        }
      })

      return {...state, groceries}

    case SET_VISIBILITY_FILTER:
      return {...state, visibilityFilter: action.value}

    case SET_QUANTITY:
      groceries = state.groceries.map(grocery => {
        if(grocery.id === action.id) {
          return {...grocery, quantity: action.quant}
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
store.dispatch(addGrocery('milk'))
store.dispatch(addGrocery('cookies'))
store.dispatch(setQuantity(0,20))


export default store
