import { useEffect, useState } from "react";
import ProductsTable from "./ProductsTable";
import type { Product } from "../../types/Product";
import { api } from "../../app/utils/api";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get("/products")
      .then(({ data }) => setProducts(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  function handleDeleteProducts(productId: string) {
    setProducts((prevState) =>
      prevState.filter((product) => product._id !== productId)
    );
  }

  return (
    <div>
      <header className="h-[72px] w-full flex justify-between">
        <div className="flex items-center gap-4">
          <h3 className="font-bold">Produtos</h3>
          <span className="bg-gray-300/20 w-[26px] h-[26px] rounded-lg text-center">
            {products.length}
          </span>
        </div>

        <div className="flex items-center text-primary text-h6 font-bold">
          <p className="ml-2 cursor-pointer">Novo</p>
        </div>
      </header>

      <ProductsTable
        products={products}
        onDeleteProduct={handleDeleteProducts}
      />
    </div>
  );
}
