'use client';
import React from 'react'
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

// UI
import { 
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { ChangePasswordSchema } from "@/schema/authSchema";
import { Card } from '../ui/card'

type FormData = z.infer<typeof ChangePasswordSchema>;

const ChangePasswordTab = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter()

  const form = useForm<FormData>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  async function onSubmit(data: FormData) {
    // console.log({ data });
    const {confirmPassword, ...user} = data
    try {
      // const result = await registerUser(user)
      toast.success("User Registered Successfully.")
    } catch (error) {
      toast.error("Something went wrong.")
      console.log(error);
    }
  }

  return (
    <>

      <div className="flex flex-col text-start">
        <h2 className='text-2xl mb-2'>Change Password</h2>
        <Card className='p-4' >
          {/* Profile Photo Card */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-2 flex flex-col"
            >

              {/* Password */}
              <div className="relative">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className='relative mb-2'>
                    <FormLabel className='relative top-2'>Password:</FormLabel> 
                    <FormControl>
                      <Input 
                        placeholder="" 
                        type={showPassword ? 'text' : 'password'} 
                        {...field}
                      />            
                    </FormControl>
                    <FormMessage className="absolute -bottom-4 left-0 text-[8px]"/>
                  </FormItem>
                )}
              />
              {showPassword ? (
                  <EyeOff
                    className='absolute top-10 right-2 text-gray-300 cursor-pointer'
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <Eye
                    className='absolute top-10 right-2 text-gray-300 cursor-pointer'
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>

              {/* Confirm Password */}
              <div className="relative">
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className='relative mb-2'>
                    <FormLabel className='relative top-2'>Confirm Password:</FormLabel> 
                    <FormControl>
                      <Input 
                        placeholder="" 
                        type={showConfirmPassword ? 'text' : 'password'} 
                        {...field}
                      />            
                    </FormControl>
                    <FormMessage className="absolute -bottom-4 left-0 text-[8px]"/>
                  </FormItem>
                )}
              />
              {showConfirmPassword ? (
                  <EyeOff
                    className='absolute top-10 right-2 text-gray-300 cursor-pointer'
                    onClick={() => setShowConfirmPassword(false)}
                  />
                ) : (
                  <Eye
                    className='absolute top-10 right-2 text-gray-300 cursor-pointer'
                    onClick={() => setShowConfirmPassword(true)}
                  />
                )}
              </div>
              <div className="h-10"></div>
                
              <Button type="submit">
                Change Password
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </>
  )
}

export default ChangePasswordTab