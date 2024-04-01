'use client';
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
import { RegisterSchema } from "@/schema/authSchema";

type FormData = z.infer<typeof RegisterSchema>;

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter()

  const form = useForm<FormData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name:"",
      email: "",
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-2 sm:space-y-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center items-start relative sm:col-span-2">
              <FormLabel className="mt-2 mr-10">
                Name:
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

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className='relative mb-2 sm:col-span-2'>
              <FormLabel  >Email Address:</FormLabel>
              <FormControl>
                <Input 
                  placeholder="" 
                  {...field} 
                />
              </FormControl>
              <FormMessage className="absolute -bottom-4 left-0 text-[8px]"/>
            </FormItem>
          )}
        />
              
        {/* Password */}
        <div className="relative">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className='relative mb-2'>
              <FormLabel>Password:</FormLabel> 
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
              <FormLabel>Confirm Password:</FormLabel> 
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

        <Button type="submit" className='text-lg col-span-1 sm:col-span-2'>
          Register
        </Button>
      </form>
    </Form>
  )
}

export default RegisterForm