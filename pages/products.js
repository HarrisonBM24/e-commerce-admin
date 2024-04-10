import Layout from "@/components/layout";
import Link from "next/link";

export default function Products() {
  return (
    <Layout>
      <Link
        href={"/products/new"}
        className="px-2 py-1 text-white bg-green-700 rounded-md"
      >
        Add new product
      </Link>
    </Layout>
  );
}
