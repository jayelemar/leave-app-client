import { Card, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import UserList from '@/components/users/UserList'
import UserStats from '@/components/users/UserStats'
import React from 'react'

const UsersPage = () => {
  return (
    <div className="flex flex-col text-start">
      <Card className='p-4 mb-4' >
        <CardHeader className='text-center'>
          <Label className='text-2xl mb-2'>Users Stats</Label>
        </CardHeader>
        <div className="space-y-4">
          <UserStats/>
          <UserList/>
        </div>
      </Card>
    </div>

  )
}

export default UsersPage