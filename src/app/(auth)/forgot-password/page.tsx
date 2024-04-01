'use client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FcGoogle } from "react-icons/fc";
import LoginForm from '@/components/form/LoginForm';
import Link from 'next/link';

const ForgotPasswordPage  = () => {
  
  return (
    <section>
      <div className="flex justify-center items-center w-full h-full sm:h-[80vh]">
        <Card className="flex flex-col justify-center items-center mx-4 w-full md:w-[400px] mb-4 h-[420px] shadow-none md:shadow-lg border-none z-50">
          <LoginForm/>
          <Button variant="ghost" className='flex gap-2 w-2/3 border border-foreground/15'>
            Login with Google <FcGoogle size={18} />
          </Button>
          <Link href='/register' className='text-muted-foreground text-xs mt-4 font-normal'>Create new account</Link>
        </Card>
      </div>
    </section>
  )
}

export default ForgotPasswordPage