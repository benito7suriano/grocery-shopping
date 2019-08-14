import React from 'react'
import GroceryItem from './GroceryItem'
import { connect } from 'react-redux'

const mapState = (state) => ({
  groceries: state.groceries
})

const GroceryList = (props) => (
  <ul>
    {props.groceries.map(grocery => (
      <GroceryItem key={grocery.id} {...grocery} />
    ))}
  </ul>
)

const ConnectedGroceryList = connect(mapState)(GroceryList)


export default ConnectedGroceryList
