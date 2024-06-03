import { useState, useEffect } from 'react'

const useCounter = (initialValue: number, delay: number) => {
  const [counter, setCounter] = useState(initialValue)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1)
    }, delay)

    return () => {
      clearInterval(interval)
    }
  }, [delay])

  return counter
}

export { useCounter }
