import Layout from "@/components/layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [goToProductsMain, setGoToProductsMain] = useState(false);
  const router = useRouter();

  async function createProduct(ev) {
    ev.preventDefault();

    const data = { title, description, price };
    await axios.post("/api/products", data);
    setGoToProductsMain(true);
  }

  if (goToProductsMain) {
    router.push("/products");
  }

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1> New Product</h1>
        <label>Product name</label>
        <input
          type="text"
          placeholder="product name"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        ></input>
        <label>Description</label>
        <textarea
          placeholder="description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <label>Price (USD)</label>
        <input
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
          type="number"
          placeholder="price"
        ></input>
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </Layout>
  );
}
