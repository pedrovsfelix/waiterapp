import Header from "../../components/Header";
import Products from "../../components/Products";
import SvgMenu from "../../icons/Menu";

export default function Menu() {
  return (
    <>
      <Header
        icon={<SvgMenu className="w-5 h-5" />}
        title="Cardápio"
        description="Gerencie os produtos do seu estabelecimento"
      />
      <Products />
    </>
  )
}
