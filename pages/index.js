import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="flex justify-between text-blue-900">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex overflow-hidden text-black bg-gray-300 rounded-lg">
          <img src={session?.user.image} className="w-6 h-6" />
          <span className="px-2">{session?.user?.email}</span>
        </div>
      </div>
    </Layout>
  );
}
