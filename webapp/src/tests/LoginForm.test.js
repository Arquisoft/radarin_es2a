import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import LoginForm from '.././components/Login/LoginForm';

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('LoginForm', () => {
  act(() => {
    ReactDOM.render(<Router>
      <LoginForm />
    </Router>, container)
  })

  expect(container).toBeTruthy()
}) 