import { useNumbers } from '../hooks/useNumbers'
import { useRandomColor } from '../hooks/useRandomColor'

const Exercise62 = () => {
  const { numbers, handleDeleteNumber, handleAddNumber } = useNumbers([])
  const bgdColor = useRandomColor('dark')

  if (!bgdColor) return null
  return (
    <>
      <div
        style={{
          width: '200px',
          height: '200px',
          border: '1px solid #000',
          backgroundColor: bgdColor,
        }}
      ></div>

      <ul>
        {numbers.length === 0 ? (
          <li>Array is empty</li>
        ) : (
          numbers.map((number, index) => (
            <li key={index}>
              Number {number} for index {index}
              <br />
              <button onClick={() => handleDeleteNumber(index)}>Delete</button>
            </li>
          ))
        )}
      </ul>

      <button onClick={handleAddNumber}>Add random number</button>
    </>
  )
}

export { Exercise62 }
