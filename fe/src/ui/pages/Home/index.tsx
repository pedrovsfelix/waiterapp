import Button from "../../components/Button";
import Header from "../../components/Header";
import Orders from "../../components/Orders";
import { Refresh } from "../../icons";
import SvgHome from "../../icons/Home";

export default function Home() {
  return (
    <>
        <Header
          icon={<SvgHome className="w-5 h-5 text-black"/>}
          title="Home"
          description="Acompanhe os pedidos dos clientes"
          rightAction={
            <div>
              <Button
                secondary
                icon={<Refresh className="w-5 h-5"/>}
              >
                Reiniciar o dia
              </Button>
            </div>
          }
        />
        <Orders />
    </>
  );
}
