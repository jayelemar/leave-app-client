import React, { FC } from 'react'
import { Card } from '../ui/card'
import { InfoBoxProps } from '@/types/types'

const InfoBox:FC<InfoBoxProps> = ({ bgColor, title, count, icon }) => {
  return (
    <Card className={`${bgColor} w-full py-2 px-4 text-background flex justify-between  items-center gap-2`}>
      <div className=" justify-center items-center flex gap-2">
        <span className='hidden min-[350px]:flex '>{icon}</span>
        {title}
      </div>
      <div className=' flex justify-between items-center gap-4 text-sm'>
        <span className="text-xl font-bold">{count}</span>
      </div>
    </Card>
  )
}

export default InfoBox