import React, {useReducer} from 'react'

const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

export const UseReducer = () => {

  const [newState, dispatch] = useReducer(reducer, initialState)
  console.log('Use reducer render ')
  return (
    <div>
      <div>Count: {newState}</div>
      <div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
      </div>
    </div>
  )
}
