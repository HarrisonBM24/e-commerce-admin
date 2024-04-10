import Layout from "@/components/layout";
import { Axios } from "axios";
import { useState } from "react";

export default function NewProduct() {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  async function createProduct() {
    const data = { tittle, description, price };
    await Axios.post("/api/products", data);
  }

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1> New Product</h1>
        <label>Product name</label>
        <input
          type="text"
          placeholder="product name"
          value={tittle}
          onChange={(ev) => setTittle(ev.target.value)}
        ></input>
        <label>Description</label>
        <textarea
          placeholder="description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <label>Price (USD)</label>
        <input type="number" placeholder="price"></input>
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </Layout>
  );
}
