import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "~/components/ui/button";

const Navbar = () => {
  const { userId } = auth();
  return (
    <>
      <nav className="sticky flex items-center justify-between px-6 py-3 bg-[#dad8c0] rounded-xl">
        <Link
          href="/"
          prefetch
          className="font-bold text-2xl text-orange-700 p-3 rounded-xl bg-[#EEE6D9]"
        >
          Reminder
        </Link>
        {userId ? (
          <div className="flex items-center gap-5">
            <Button variant="link" className="text-lg text-green-500">
              <Link href="/workspace">workspace</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <Button variant="outline" size="lg">
            <Link href="/sign-in">SignIn</Link>
          </Button>
        )}
      </nav>
    </>
  );
};

export default Navbar;
