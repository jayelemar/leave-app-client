import React from 'react'
import Image from 'next/image'
import ImageSrc from '@/../public/profile-image.jpg'
import ProfileForm from '@/components/form/ProfileForm'
import { Card, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

const ProfilePage = () => {
  return (

    <div className="flex flex-col text-start">
      <Card className='p-4 mb-4' >
        <CardHeader className='text-center'>
          <Label className='text-2xl mb-2'>Profile</Label>
        </CardHeader>
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

  )
}

export default ProfilePage