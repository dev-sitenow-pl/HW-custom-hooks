import { useEffect, useState } from 'react'

const useRandomColor = (type: 'light' | 'dark') => {
  const [color, setColor] = useState<string | null>(null)

  useEffect(() => {
    const hue = Math.floor(Math.random() * 360) + 1
    const saturation = Math.floor(Math.random() * 100) + 1

    const threshold = 25

    const lightness =
      type === 'dark'
        ? Math.floor(Math.random() * threshold)
        : Math.floor(Math.random() * (100 - threshold)) + threshold

    setColor(`hsl(${hue}, ${saturation}%, ${lightness}%)`)
  }, [type])

  return color
}

export { useRandomColor }
