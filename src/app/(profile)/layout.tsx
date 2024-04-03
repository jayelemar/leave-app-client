import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="relative">
      <div className="container mx-auto flex flex-col justify-center item-center">
        <div className="flex flex-col text-center">
          <Tabs defaultValue="profile" className='mt-8' >
            <TabsList className='w-full rounded-lg mb-4'>
              <TabsTrigger value="profile" className='rounded-lg'>
                <Link href='/profile'>Profile</Link>
              </TabsTrigger>
              <TabsTrigger value="change-password" className='rounded-lg'>
                <Link href='change-password'>Password</Link>
              </TabsTrigger>
              <TabsTrigger value="users" className='rounded-lg'>
                <Link href='users'>
                  Users
                </Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <main>
            {children}
          </main>
        </div>
      </div>
    </section>


  );
}