import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import React from 'react'

const VerifyPage = () => {
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="flex flex-col text-center justify-center items-center w-full h-screen ">
        <Card className="flex flex-col justify-center items-center w-full max-w-[400px]  shadow-lg p-4">
          <CardHeader>
            <Label className="flex items-center justify-center text-2xl">
              Verify Account
            </Label>
          </CardHeader>
            <p>To verify your account, click the button below.</p>
            <Button className='w-40 my-4'>Verify Account</Button>
          </Card>
        </div>
      </div>
    </section>


  )
}

export default VerifyPage