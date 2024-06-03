import { useState, useEffect } from 'react'

const useDebouncedState = <T>(value: T, deley: number) => {
  const [debouncedValue, setDebouncedValue] = useState<T | null>(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, deley)

    return () => {
      clearTimeout(timeout)
    }
  }, [value, deley])

  return debouncedValue
}

export { useDebouncedState }
