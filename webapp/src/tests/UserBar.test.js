import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import UserBar from '.././components/Navegation/UserBar';

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('Login', () => {
  act(() => {
    ReactDOM.render(<Router>
      <UserBar />
    </Router>, container)
  })

  expect(container).toBeTruthy()
}) 