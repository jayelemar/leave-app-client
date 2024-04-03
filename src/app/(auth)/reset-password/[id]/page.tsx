'use client';
import Link from "next/link";
import { Card, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import ResetPasswordForm from "@/components/form/ResetPasswordForm";

const ResetPasswordPage = () => {
  
  return (
    <section className="relative">
      <div className="container mx-auto flex flex-col justify-center item-center">
        <div className="flex flex-col justify-center items-center h-screen">
          <Card className="flex flex-col justify-center items-center w-full max-w-[400px]  shadow-lg ">
            <CardHeader>
              <Label className="flex items-center justify-center text-2xl">
                Reset Password
              </Label>
            </CardHeader>
            <ResetPasswordForm />
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
export default ResetPasswordPage;
