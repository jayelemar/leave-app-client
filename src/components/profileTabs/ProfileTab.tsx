import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import ProfileForm from '../form/ProfileForm'
import ImageSrc from '@/../public/profile-image.jpg'

const ProfileTab = () => {
  return (

    <section className="relative">
      <div className="container mx-auto h-[85vh] flex flex-col justify-center item-center">
        <div className="flex flex-col text-center">
          {/* Tab Profile */}
      <div className="flex flex-col text-center">
        <h2 className='text-2xl mb-2'>Profile</h2>
        <Card className='p-4' >
          {/* Profile Photo Card */}
          <div className="flex flex-col justify-start items-center bg-blue-400 p-4 gap-y-4 rounded mb-2">
            {/* photo */}
            <div className="h-32 w-32 relative">
              <Image 
                src={ImageSrc} 
                alt='profile-img' 
                className='rounded-full border-2'
                priority
                fill
              />
            </div>
            <h3 className='text-background'>Role: Subscriber</h3>
          </div>
          <ProfileForm />
        </Card>
      </div>
        </div>
      </div>
    </section>

  )
}

export default ProfileTab