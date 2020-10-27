import React, { useState } from 'react'
import { fireEvent, render } from '@testing-library/react'
import ExampleComponent from '../ExampleComponent'

/*One common testing problem is wrapping react with it. Here, we create a wrapper
component that can contain any variables, state, etc. needed for the rendering of our intended
component we are going to test (ex. ExampleComponent).
 */
const ComponentContainer = () => {
  const [count, setCount] = useState(0)

  return (
    <section>
      <h1>The Count is: {count}</h1>
      <ExampleComponent count={count} setCount={setCount} />
    </section>
  )
}

//This is a basic render test.
test('Renders header component', () => {
  const { getByRole } = render(<ComponentContainer />)
  const headerElement = getByRole('heading')
  expect(headerElement).toBeInTheDocument()
})

//There are multiple ways to grab components in React-testing-library. Be sure to only grab the ones necessary.
test('increment button works', () => {
  const { getByText } = render(<ComponentContainer />)
  const incrementButton = getByText('Increment')
  fireEvent.click(incrementButton)
  const count = getByText('The Count is: 1')
  expect(count).toBeInTheDocument()
})

//Keep in mind, when testing for different events, the state won't go back to initial state when
// the next event is fired in the same test function. Therefore, try and keep all test functions separated.
test('decrement button works', () => {
  const { getByText } = render(<ComponentContainer />)
  let count = getByText('The Count is: 0')
  expect(count).toBeInTheDocument()
  const decrementButton = getByText('Decrement')
  fireEvent.click(decrementButton)
  count = getByText('The Count is: -1')
  expect(count).toBeInTheDocument()
})
