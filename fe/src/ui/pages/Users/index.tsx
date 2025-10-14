import { useEffect, useState } from "react";
import type { User } from "../../../types/User";
import { DataTable } from "../../components/DataTable";
import Header from "../../components/Header";
import type { ColumnDef } from "@tanstack/react-table";
import { httpClient } from "../../../app/services/httpClient";
import { Edit, Trash } from "../../icons";

const userColumns: ColumnDef<User>[] = [
  { accessorKey: "name", header: "Nome" },
  { accessorKey: "email", header: "E-mail" },
  { accessorKey: "type", header: "Cargo" },
  {
      accessorKey: "actions",
      header: "Ações",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => console.log("Editar usuário")}
            type="button"
            className="cursor-pointer bg-transparent border-0 w-8 h-8 p-0 text-black"
          >
            <Edit />
          </button>
          <button
            onClick={() => console.log("Excluir Usuário")}
            type="button"
            className="cursor-pointer bg-transparent border-0 w-8 h-8 p-0 text-primary"
          >
            <Trash />
          </button>
        </div>
      ),
    },
];

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    httpClient
      .get("/users")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.error("Erro ao buscar usuários: ", err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Header />
      <header className="h-[72px] w-full flex justify-between">
        <div className="flex items-center gap-4">
          <h3 className="font-bold">Users</h3>
          <span className="bg-gray-300/20 w-[26px] h-[26px] rounded-lg text-center">
            {users.length}
          </span>
        </div>

        <div className="flex items-center text-primary text-h6 font-bold">
          <p className="ml-2 cursor-pointer">Novo</p>
        </div>
      </header>

      {isLoading ? (
        <p>Carregando usuários...</p>
      ) : (
        <DataTable columns={userColumns} data={users} />
      )}
    </>
  );
}
