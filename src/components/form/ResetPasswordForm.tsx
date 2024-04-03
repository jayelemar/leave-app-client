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

const ResetPasswordForm = () => {
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
        className="w-2/3 space-y-3 mb-2"
      >

<div className="relative">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col justify-center items-start relative">
                <FormLabel className="relative top-1 mt-2 mr-4">
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
        </div>
        <div className="relative">
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="flex flex-col justify-center items-start mb-12 relative">
                <FormLabel className="relative top-1 mt-2 mr-4">
                    Confirm Password
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
        </div>


        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default ResetPasswordForm