import React from 'react'
import InfoBox from '../common/InfoBox'
import { usersData } from './UserData'

const UserStats = () => {

  return (
    <div className="grid grid-cols-1 min-[620px]:grid-cols-2 lg:grid-cols-4 gap-2">
      {usersData.map((category, index)=> {
        const { bgColor, title, count, icon} = category
        return (
          <InfoBox key={index} bgColor={bgColor} title={title} count={count} icon={icon}/>
        )
      })}
    </div>
  )
}

export default UserStats