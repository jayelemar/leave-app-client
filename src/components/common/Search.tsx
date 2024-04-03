import React, { FC } from 'react'
import { Input } from '../ui/input'
import { SearchIcon } from 'lucide-react'

interface SearchProps {
  value: any,
  onChange: any,
}

const Search:FC<SearchProps> = ({ value, onChange}) => {
  return (
    <div className='relative'>
      <Input placeholder='Search Users' type='text' value={value} onChange={onChange} />
      <SearchIcon className='absolute right-2 top-[10px] text-muted-foreground' size={18} />
    </div>
  )
}

export default Search