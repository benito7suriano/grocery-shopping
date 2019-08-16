import React from 'react'
import GroceryItem from './GroceryItem'
import { connect } from 'react-redux'
import { toggleGrocery } from '../store'

const mapState = (state) => {
  const SHOW_ALL = 'SHOW_ALL'
  const SHOW_BOUGHT = 'SHOW_BOUGHT'
  const SHOW_ACTIVE = 'SHOW_ACTIVE'

  let groceries = []
  const visibility = state.visibilityFilter

  if(visibility === SHOW_ALL) {
    groceries = state.groceries
  } else if(visibility === SHOW_BOUGHT) {
    groceries = state.groceries.filter(grocery => grocery.bought)
  } else if(visibility === SHOW_ACTIVE) {
    groceries = state.groceries.filter(grocery => !grocery.bought)
  }

  return {...state, groceries: [...groceries]}

  // return {...state, groceries:[...state.groceries]}
}

const mapDispatch = (dispatch) => ({
  toggleGrocery: id => dispatch(toggleGrocery(id))
})

const GroceryList = (props) => (
  <ul>
    {props.groceries.map(grocery => (
      <GroceryItem key={grocery.id} {...grocery} onClick={() => props.toggleGrocery(grocery.id)} />
    ))}
  </ul>
)

const ConnectedGroceryList = connect(mapState, mapDispatch)(GroceryList)

export default ConnectedGroceryList
