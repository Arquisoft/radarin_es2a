import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import Friends from '.././components/Friends/Friends';

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('Friends', () => {
  act(() => {
    ReactDOM.render(<Router>
      <Friends />
    </Router>, container)
  })

  expect(container).toBeTruthy()
})