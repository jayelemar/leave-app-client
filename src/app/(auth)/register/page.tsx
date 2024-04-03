'use client';
import Link from "next/link";
import RegisterForm from "@/components/form/RegisterForm";
import { Card, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const RegisterPage = () => {
  
  return (

    <section className="relative">
      <div className="container mx-auto">
        <div className="flex flex-col h-screen justify-center items-center">
          <Card className="flex flex-col justify-center items-center w-full max-w-[400px] shadow-lg mt-20 mb-20 h-auto">
            <CardHeader>
              <Label className="flex items-center justify-center text-2xl">
                Register
              </Label>
            </CardHeader>
            <RegisterForm />
            <Link href='/login' className='text-muted-foreground text-xs my-4 font-normal'>Login to existing account</Link>
          </Card>
        </div>
      </div>
    </section>
  )
}
export default RegisterPage;
