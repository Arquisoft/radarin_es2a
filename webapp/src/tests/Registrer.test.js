import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import Registrer from '.././components/Registrer/Registrer';

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('Registrer', () => {
  act(() => {
    ReactDOM.render(<Router>
      <Registrer />
    </Router>, container)
  })

  expect(container).toBeTruthy()
})