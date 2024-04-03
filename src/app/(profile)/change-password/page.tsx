'use client';
import React from 'react'

// UI
import { Card, CardHeader } from '@/components/ui/card';
import ChangePasswordForm from '@/components/form/ChangePasswordForm';
import { Label } from '@/components/ui/label';

const ChangePasswordPage = () => {

  return (

      <div className="flex flex-col text-start">
          <Card className='p-4' >
            <CardHeader className='text-center'>
              <Label className='text-2xl mb-2'>Change Password</Label>
            </CardHeader>
            <ChangePasswordForm />
          </Card>
        </div>

  )
}

export default ChangePasswordPage