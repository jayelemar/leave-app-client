import { Card, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import ForgotPasswordForm from '@/components/form/ForgotPasswordForm';
import { Label } from '@/components/ui/label';

const ForgotPasswordPage  = () => {
  
  return (
    <section className="relative">
      <div className="container mx-auto flex flex-col justify-center item-center">
        <div className="flex flex-col justify-center items-center h-screen">
          <Card className="flex flex-col justify-center items-center mx-4 w-full max-w-[400px] mb-4 h-auto shadow-lg">
            <CardHeader>
              <Label className="flex items-center justify-center text-2xl">
                Forgot Password
              </Label>
            </CardHeader>
            <ForgotPasswordForm/>
            <Link 
              href='/' 
              className='text-muted-foreground text-xs my-4 font-normal'
            >
              Return to Home Page
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ForgotPasswordPage