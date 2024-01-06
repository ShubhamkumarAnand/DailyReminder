import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <h1>Welcome to the reminder application!</h1>
      <Link href="/workspace" prefetch>
        Workspace
      </Link>
    </main>
  );
}
