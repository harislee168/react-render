import React, {useState} from 'react'

const UseState = () => {
  const [count, setCount] = useState(0)
  console.log('use state component is rendered')
  return (
    <div>
      <button onClick={() => setCount(count+1)}>count: {count}</button>
      <button onClick={() => setCount(0)}>count back to 0 </button>
      <button onClick={() => setCount(5)}>count to 5 </button>
    </div>
  )
}

export default UseState
