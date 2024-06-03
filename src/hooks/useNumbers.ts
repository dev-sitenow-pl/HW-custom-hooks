import { useState } from 'react'

const useNumbers = (array: number[]) => {
  const [numbers, setNumbers] = useState<number[]>(array)

  const handleAddNumber = () => {
    const value: number = Math.floor(Math.random() * 10000) + 1
    setNumbers((prevNumbers) => [...prevNumbers, value])
  }

  const handleDeleteNumber = (index: number) => {
    const updatedNumbers = numbers.filter((_, i) => i !== index)
    setNumbers(updatedNumbers)
  }

  return {
    numbers,
    handleAddNumber,
    handleDeleteNumber,
  }
}

export { useNumbers }
