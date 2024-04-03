'use client';
import { Card, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import AccessCodeForm from '@/components/form/AccessCodeForm';
import { Button } from '@/components/ui/button';
import { Label } from '@radix-ui/react-label';

const AccessCodePage  = () => {
  
  return (
    <section className="relative">
      <div className="container mx-auto flex flex-col justify-center item-center">
        <div className="flex flex-col justify-center items-center h-screen">
          <Card className="relative flex flex-col justify-center items-center w-full max-w-[400px]  shadow-lg ">
            <CardHeader>
              <Label className="flex items-center justify-center text-2xl mb-4">
                Enter Access Code
              </Label>
            </CardHeader>
          <AccessCodeForm/>
          <Link 
            href='/' 
            className='text-muted-foreground text-xs font-normal absolute top-24 right-16'
          >
            Resend Code
          </Link>
          <Link 
            href='/' 
            className='text-muted-foreground text-xs mt-8 mb-4 font-normal'
          >
            Return to Home Page
          </Link>

        </Card>
      </div>
      </div>
    </section>
  )
}

export default AccessCodePage