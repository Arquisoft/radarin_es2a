import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import NavBar from '.././components/Navegation/NavBar';

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('NavBar', () => {
  act(() => {
    ReactDOM.render(<Router>
      <NavBar />
    </Router>, container)
  })

  expect(container).toBeTruthy()
}) 