import type { Metadata } from "next";
import "./globals.css";
import poppins from "@/lib/fonts";
import SessionProviders from "@/components/provider/SessionProviders";
import ToastProvider from "@/components/provider/ToastProvider";

export const metadata: Metadata = {
  title: "Leave Management System",
  description: "Leave Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <ToastProvider>
      <SessionProviders>
          <div className="sm:h-[80vh]">
            {children}
          </div>
      </SessionProviders>
      </ToastProvider>
      </body>
    </html>
  );
}
