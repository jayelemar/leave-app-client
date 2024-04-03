"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "../ui/textarea"

type FormData = z.infer<typeof FormSchema>

const FormSchema = z.object({
  image: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  phone: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  bio: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
})

const ProfileForm = () => {
  const handleImageChange = () => {};

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      image: "",
      name: "",
      email: "",
      phone: "",
      bio: "",
    },
  })

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full gap-y-2 flex flex-col text-start">
  
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className='relative top-2'>Change Photo</FormLabel>
              <FormControl>
                <Input  
                  {...field}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block h-12 w-full text-xs text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-xs file:font-medium
                  file:bg-primary/15 file:text-primary
                  hover:file:bg-primary/30 hover:file:cursor-pointer"
                />
              </FormControl>
              <FormMessage className="absolute -bottom-4 left-0 text-[8px]"/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className='relative top-2'>Name:</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
              <FormMessage className="absolute -bottom-4 left-0 text-[8px]"/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className='relative top-2'>Email:</FormLabel>
              <FormControl>
                <Input  {...field} disabled style={{ cursor: 'default' }}/>
              </FormControl>
              <FormMessage className="absolute -bottom-4 left-0 text-[8px]"/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className='relative top-2'>Phone:</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
              <FormMessage className="absolute -bottom-4 left-0 text-[8px]"/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className='relative top-2'>Bio:</FormLabel>
              <FormControl>
              <Textarea 
                className="rounded min-h-[130px] lg:min-h-[180px] text-base py-5 px-8" 
                {...field}
              />
              </FormControl>
              <FormMessage className="absolute -bottom-4 left-0 text-[8px]"/>
            </FormItem>
          )}
        />
        <div className="h-[100px]"></div>
        
        <Button type="submit" className="w-full">Upload Profile</Button>
      </form>
    </Form>
  )
}
export default ProfileForm
