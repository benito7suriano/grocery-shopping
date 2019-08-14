import { createStore } from 'redux'

const ADD_GROCERY = 'ADD_GROCERY'

const initialState = {
  groceries: []
}

let nextId = 0

export const addGrocery = (text) => (
  {
    type: ADD_GROCERY,
    id: nextId++,
    text
  }
)

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_GROCERY:
      const newGrocery = {
        id: action.id,
        text: action.text,
        bought: false
      }

      return { ...state, groceries: [...state.groceries, newGrocery] }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
