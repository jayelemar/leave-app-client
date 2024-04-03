import React, { FC, useState } from 'react'
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';

import { 
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage 
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { LoginSchema } from '@/schema/authSchema';
import { Button } from '../ui/button';

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
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center items-start relative">
              <FormLabel className="mt-2 mr-10" />
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
        <Button type="submit" className="w-full">
          Proceed to Login
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm