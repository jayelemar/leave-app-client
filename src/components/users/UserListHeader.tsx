import React from 'react'
import { Card, CardHeader } from '../ui/card'
import { Label } from '@radix-ui/react-label'
import Search from '../common/Search'

const UserListHeader = () => {
  return (
    <div className="flex flex-col min-[400px]:flex-row justify-between items-start text-center">
      <Label className='text-2xl mb-2 relative top-1'>All Users</Label>
      <Search value='' onChange='' />
    </div>
  )
}

export default UserListHeader