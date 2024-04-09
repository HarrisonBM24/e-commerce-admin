import Nav from "@/components/nav";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="flex items-center w-screen h-screen bg-blue-900">
        <div className="w-full text-center">
          <button
            onClick={() => signIn("google")}
            className="p-2 px-4 bg-white rounded-lg"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="flex min-h-screen bg-blue-900">
      <Nav />
      <div className="flex-grow p-4 mt-2 mr-2 bg-white rounded-lg">
        logged in {session.user.email}
      </div>
    </div>
  );
}
