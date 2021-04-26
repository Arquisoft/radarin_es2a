import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import Profile from '.././components/Profile/Profile';

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('Profile', () => {
  act(() => {
    ReactDOM.render(<Router>
      <Profile />
    </Router>, container)
  })

  expect(container).toBeTruthy()
})