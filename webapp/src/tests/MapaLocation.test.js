import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import MapFriendLocation from '.././components/Map/MapFriendLocation';

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('MapFriendLocation', () => {
  act(() => {
    ReactDOM.render(<Router>
      <MapFriendLocation />
    </Router>, container)
  })

  expect(container).toBeTruthy()
}) 