import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import "./globals.css";

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
            <nav className="sticky flex items-center justify-between px-6 py-3 bg-[#eaf0f1] rounded-xl">
              <Link
                href="/"
                prefetch
                className="font-bold text-2xl text-orange-700 p-3 rounded-xl bg-[#EEE6D9]"
              >
                Reminder
              </Link>
              <div className="flex items-center gap-5">
                <Link
                  href="/workspace"
                  className="text-lg font-semibold border-green-300 text-[#dad8c0] hover:border-b-[4px] h-7"
                >
                  workspace
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            </nav>
          </div>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
