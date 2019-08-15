import React from 'react'
import GroceryItem from './GroceryItem'
import { connect } from 'react-redux'
import { toggleGrocery } from '../store'

const mapState = (state) => ({
  groceries: state.groceries
})

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
