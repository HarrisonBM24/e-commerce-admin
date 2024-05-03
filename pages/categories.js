import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

export default function Categories() {
  const [name, setName] = useState("");
  async function saveCategory() {
    await axios.post("/api/categories", { name });
    setName("");
  }

  return (
    <Layout>
      <h1>Categories</h1>
      <label>New category name</label>
      <form onSubmit={saveCategory}>
        <div className="flex gap-1">
          <input
            onChange={(ev) => setName(ev.target.value)}
            value={name}
            className="mb-0"
            type="text"
            placeholder={"Category name"}
          />
          <button type={"submit"} className="py-1 btn-primary">
            Save
          </button>
        </div>
      </form>
    </Layout>
  );
}
