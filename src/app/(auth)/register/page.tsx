'use client';
import Link from "next/link";
import RegisterForm from "@/components/form/RegisterForm";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const RegisterPage = () => {
  
  return (
    <section>
      <div className="container mx-auto flex justify-center items-center h-[80vh]">
        <Card className="flex flex-col gap-y-2 justify-center items-center w-full md:w-[650px] mb-4 h-[420px] shadow-none md:shadow-lg border-none z-50 ">
          <Label className="flex items-center justify-center text-xl mt-8">
            Register
          </Label>
          <RegisterForm />
          <Link href='/login' className='text-muted-foreground text-xs font-normal mt-2 mb-4 '>Login to existing account</Link>
        </Card>
      </div>
    </section>
  )
}
export default RegisterPage;
