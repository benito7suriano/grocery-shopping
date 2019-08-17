import React from 'react'
import { connect } from 'react-redux'
import { setQuantity } from '../store'

const handleChange = (event) => {
  console.log('selection changed...')

}

// const optionsCreate = (num) => {
//   let numArray = []

//   for(let i=0; i<num; i++) {
//     numArray.push(i+1)
//   }

//   console.log('a num array was just created: ', numArray)

//   return numArray
// }

const mapDispatch = (dispatch) => ({
  setQuantity: (id,quantity) => dispatch(setQuantity(id,quantity))
})

const GroceryItem = ({ onClick, bought, id, quantity, text, setQuantity }) => {
  return (
  <div className='grocery-item'>
    <li
      onClick={onClick}
      style={{
        textDecoration: bought ? 'line-through' : 'none'
      }}>
      {text}
    </li>
    <form>
      <label>
        Quantity:
        <select value={quantity} onChange={(evt) => setQuantity(id, +evt.target.value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </label>
    </form>
  </div>
)}

const ConnectedGroceryItem = connect(null, mapDispatch)(GroceryItem)

export default ConnectedGroceryItem
