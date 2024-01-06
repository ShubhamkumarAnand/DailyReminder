import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <h1>Welcome to the reminder application!</h1>
      <UserButton afterSignOutUrl="/" />
      <Link href="/workspace" prefetch>
        Workspace
      </Link>
    </main>
  );
}
