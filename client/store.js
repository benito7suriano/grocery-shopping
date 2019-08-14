import { createStore } from 'redux'
import { doesNotReject } from 'assert'

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
      console.log('adding grocery...')
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

// Manual test (temporary hard coded dispatches just for fun)
// store.dispatch(addGrocery('milk'))
// store.dispatch(addGrocery('cookies'))

export default store
