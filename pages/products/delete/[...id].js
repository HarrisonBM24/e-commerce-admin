import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteProductPage() {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get("/api/products?id=" + id).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);

  function goMain() {
    router.push("/products");
  }

  async function deleteProduct() {
    await axios.delete("/api/products?id=" + id);
    goMain();
  }

  return (
    <Layout>
      <h1 className="text-center">
        Realmente quieres eliminar este producto <b>{productInfo?.title}</b>?
      </h1>
      <div className="flex justify-center gap-1">
        <button onClick={deleteProduct} className="btn-red">
          Sí
        </button>
        <button className="btn-default" onClick={goMain}>
          No
        </button>
      </div>
    </Layout>
  );
}
