import React, { FC, useState } from 'react'
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';


import { Eye, EyeOff } from 'lucide-react'
import { 
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage 
} from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { LoginSchema } from '@/schema/authSchema';
import { Button } from '../ui/button';
import Link from 'next/link';

interface LoginFormProps {
  callbackUrl?: string
}

type FormData = z.infer<typeof LoginSchema>

const LoginForm:FC<LoginFormProps> = ( props) => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()

  const form = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: FormData) {
    // console.log(data);
    const response = await signIn("credentials", { 
      redirect: false ,
      username: data.email,
      password: data.password
    })
    if (response && response.error) {
      toast.error(response.error || "An error occurred during login");
      return;
    }
    router.push(props.callbackUrl? props.callbackUrl: "/")
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-3 mb-2"
      >
        <Label className="flex items-center justify-center text-2xl">
          Login
        </Label>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center items-start relative">
              <FormLabel className="mt-2 mr-10">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage className="absolute -bottom-4 left-0 text-[8px]"/>
            </FormItem>
          )}
        />
        <div className="relative">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col justify-center items-start mb-12 relative">
                <FormLabel className="mt-2 mr-4">
                    Password
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={field.value}
                    onChange={(e) =>
                      field.onChange(
                        e.target.value
                      )
                    }
                  />
                </FormControl>
                <FormMessage className="absolute -bottom-4 left-0 text-[8px]"/>
              </FormItem>
            )}
          />
          {showPassword ? (
            <EyeOff
              className="absolute top-10 right-2 text-gray-300 cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <Eye
              className="absolute top-10 right-2 text-gray-300 cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
          <Link href='/forgot-password' className='absolute -bottom-7 text-muted-foreground text-xs'>forgot password?</Link>
        </div>
        <Button type="submit" className="w-full text-lg">
          Login
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm