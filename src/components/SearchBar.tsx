import { useEffect, useState } from 'react'
import letters from '../store/letters';

const SearchBar = () => {
  const [value, setValue] = useState<string>('')
  useEffect(() => {
    letters.setSortValue(value)
  }, [value])
  return (
    <input
      type="text"
      placeholder='Поиск...'
      className='rounded w-96 py-2 px-4'
      onChange={e => setValue(e.target.value)}
    />
  )
}

export default SearchBar