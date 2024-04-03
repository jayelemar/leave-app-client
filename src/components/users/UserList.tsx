"use client"
import React from 'react'
import UserListHeader from './UserListHeader'
import { UserListTable } from './UserListTable'


const UserList = () => {
  return (
    <div className='space-y-4'>
      <UserListHeader/>
      <UserListTable/>
    </div>
  )
}

export default UserList