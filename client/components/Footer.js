import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../store'

const mapDispatch = (dispatch) => ({
  filter: (value) => dispatch(setVisibilityFilter(value))
})

const Footer = (props) => (
  <div className="footer">
    <a onClick={() => props.filter('SHOW_ALL')}>SHOW ALL&nbsp;</a>
    <a onClick={() => props.filter('SHOW_ACTIVE')}>SHOW ACTIVE&nbsp;</a>
    <a onClick={() => props.filter('SHOW_BOUGHT')}>SHOW BOUGHT&nbsp;</a>
  </div>
)

const ConnectedFooter = connect(null, mapDispatch)(Footer)

export default ConnectedFooter
