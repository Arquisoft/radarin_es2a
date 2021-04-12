import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import BarraAdmin from '.././components/Navegation/AdminBar';

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('BarraAdmin', () => {
  act(() => {
    ReactDOM.render(<Router>
      <BarraAdmin />
    </Router>, container)
  })

  expect(container).toBeTruthy()
})