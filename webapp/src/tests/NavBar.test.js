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

test('NavBar', () => {
  //Para que cubra todo
  //window.sessionStorage.setItem('user', 'usuario1@usuario.com');
  act(() => {
    ReactDOM.render(<Router>
      <NavBar />
    </Router>, container)
  })
  //window.sessionStorage.removeItem('user');
  expect(container).toBeTruthy()
}) 