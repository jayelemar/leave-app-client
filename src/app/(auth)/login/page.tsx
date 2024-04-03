
import { Card, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FcGoogle } from "react-icons/fc";
import LoginForm from '@/components/form/LoginForm';
import Link from 'next/link';
import { Label } from '@/components/ui/label';

const LoginPage = () => {
  
  return (
  <section className="relative">
    <div className="container mx-auto flex flex-col justify-center item-center">
      <div className="flex flex-col justify-center items-center h-screen">
        <Card className="flex flex-col justify-center items-center w-full max-w-[400px]  shadow-lg ">
          <CardHeader>
            <Label className="flex items-center justify-center text-2xl">
              Login
            </Label>
          </CardHeader>
  
          <LoginForm/>

          <Button variant="ghost" className='flex gap-2 w-3/4 border border-foreground/15 text-sm'>
            Login with Google <FcGoogle size={18} />
          </Button>
          <Link href='/register' className='text-muted-foreground text-xs my-4 font-normal'>Create new account</Link>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default LoginPage