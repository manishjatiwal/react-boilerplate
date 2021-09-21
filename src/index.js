import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './global-styles'
import Vessel from './vessel'

ReactDOM.render(
  <>
    <GlobalStyle />
    <Vessel />
  </>,
  document.getElementById('react-boilerplate-container')
)
