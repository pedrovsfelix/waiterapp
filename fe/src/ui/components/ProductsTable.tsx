import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import type { Product } from "../../types/Product";
import { api } from "../../app/utils/api";
import { formatCurrency } from "../../app/utils/formatCurrency";
import ProductModal from "./ProductModal";
import { toast } from "react-toastify";
import { Edit, Trash } from "../icons";

interface ProductsProps {
  products: Product[];
  onDeleteProduct(productId: string): void;
}

export default function ProductsTable({ products, onDeleteProduct }: ProductsProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedProduct(null);
  }

  async function handleDeleteProduct(product: Product) {
    if (!product) return;
    setIsLoading(true);

    try {
      await api.delete(`/products/${product._id}`);

      toast.success(`O produto ${product.name} foi deletado!`);
      onDeleteProduct(product._id);
      handleCloseModal();
    } catch (err) {
      toast.error("Erro ao deletar produto");
    } finally {
      setIsLoading(false);
    }
  }

  const columns = [
    {
      accessorKey: "imagePath",
      header: "Imagem",
      cell: ({ row }) => (
        <img
          src={`${import.meta.env.VITE_API_URL}/uploads/${row.original.imagePath}`}
          alt={row.original.name}
          className="w-12 h-12 object-cover rounded-md"
        />
      ),
    },
    { accessorKey: "name", header: "Nome" },
    { accessorKey: "category", header: "Categoria" },
    {
      accessorKey: "price",
      header: "Preço",
      cell: ({ row }) => formatCurrency(row.original.price),
    },
    {
      accessorKey: "actions",
      header: "Ações",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleOpenModal(row.original)}
            type="button"
            className="cursor-pointer bg-transparent border-0 w-8 h-8 p-0 text-black"
          >
            <Edit />
          </button>
          <button
            onClick={() => handleDeleteProduct(row.original)}
            type="button"
            className="cursor-pointer bg-transparent border-0 w-8 h-8 p-0 text-primary"
          >
            <Trash />
          </button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        product={selectedProduct}
        onClose={handleCloseModal}
        onDeleteProduct={handleDeleteProduct}
        isLoading={isLoading}
      />

      <table className="w-full border border-gray-300/40 rounded-md">
        <thead className="bg-gray-300/20 text-sm h-[53px]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-2 text-left font-semibold">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-t border-gray-300/20 hover:bg-gray-100/50"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
