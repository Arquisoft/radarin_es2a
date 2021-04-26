import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import RegistrerForm from '.././components/Registrer/RegistrerForm';

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('RegistrerForm', () => {
  act(() => {
    ReactDOM.render(<Router>
      <RegistrerForm />
    </Router>, container)
  })

  expect(container).toBeTruthy()
}) 