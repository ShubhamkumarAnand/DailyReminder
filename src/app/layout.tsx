import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, SignIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import "./globals.css";
import Navbar from "~/app/_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reminder Application",
  description:
    "So, You forgot what to do today. Well, I'm here to remind you to complete the task!",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body
          className={`${inter.className} antialiased bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFBE98] to-[#FF8A70]`}
        >
          <div className="p-5 lg:px-24 lg:py-8">
            <Navbar />
          </div>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
