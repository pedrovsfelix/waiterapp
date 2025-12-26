import { useEffect, useState } from "react";
import type { User } from "../../../types/User";
import { DataTable } from "../../components/DataTable";
import Header from "../../components/Header";
import type { ColumnDef } from "@tanstack/react-table";
import { httpClient } from "../../../app/services/httpClient";
import { Edit, Plus, Trash } from "../../icons";
import UserModal from "./components/Modals/UserModal";
import CreateUserModal from "./components/Modals/CreateUserModal";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import Input from "../../components/Input";
import SvgUsers from "../../icons/Users";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [modalVisible, setModalVisible] = useState(false);            // Edit
  const [modalCreateVisible, setModalCreateVisible] = useState(false); // Create
  const [modalConfirmVisible, setConfirmVisible] = useState(false);     // Delete

  async function loadUsers() {
    setIsLoading(true);
    try {
      const { data } = await httpClient.get("/users");
      setUsers(data);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

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
            onClick={() => {
              setSelectedUser(row.original);
              setModalVisible(true);
            }}
            className="w-8 h-8 text-black cursor-pointer text-2xl"
          >
            <Edit />
          </button>

          <button
            onClick={() => {
              setSelectedUser(row.original);
              setConfirmVisible(true);
            }}
            className="w-8 h-8 text-primary cursor-pointer text-2xl"
          >
            <Trash />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Header
        icon={<SvgUsers className="w-5 h-5" />}
        title="Usuários"
        description="Cadastre e gerencie seus usuários"
      />

      <header className="h-[72px] w-full flex justify-between">
        <div className="flex items-center gap-4">
          <h3 className="font-bold">Usuários</h3>
          <span className="bg-gray-300/20 w-[26px] h-[26px] rounded-lg text-center">
            {users.length}
          </span>
        </div>

        <Button
          secondary
          icon={<Plus className="w-5 h-5" />}
          onClick={() => {
            setModalCreateVisible(true);
          }}
        >
          Novo Usuário
        </Button>
      </header>

      {isLoading ? (
        <p>Carregando usuários...</p>
      ) : (
        <DataTable columns={userColumns} data={users} />
      )}

      <UserModal
        visible={modalVisible}
        user={selectedUser}
        onClose={() => setModalVisible(false)}
        onRefresh={loadUsers}
      />

      <CreateUserModal
        visible={modalCreateVisible}
        onClose={() => setModalCreateVisible(false)}
        onRefresh={loadUsers}
      />

      <Modal
        open={modalConfirmVisible}
        title="Excluir Usuário"
        onClose={() => setConfirmVisible(false)}
        footer={
          <div className="flex items-center justify-between">
            <Button
              className="bg-transparent text-primary"
              onClick={() => setConfirmVisible(false)}
            >
              Manter Usuário
            </Button>

            <Button
              className="bg-red-500 text-white"
              onClick={async () => {
                if (!selectedUser) return;

                await httpClient.delete(`/users/${selectedUser._id}`);
                await loadUsers();
                setConfirmVisible(false);
              }}
            >
              Excluir Usuário
            </Button>
          </div>
        }
      >
        <span className="text-center font-medium mb-4">
          Tem certeza que deseja excluir o usuário abaixo?
        </span>

        <div className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Nome"
            value={selectedUser?.name ?? ""}
            disabled
          />
          <Input
            type="email"
            placeholder="E-mail"
            value={selectedUser?.email ?? ""}
            disabled
          />
        </div>
      </Modal>
    </>
  );
}
