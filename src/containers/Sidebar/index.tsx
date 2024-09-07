import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Tittle"
import { BotaoTema, Descricao, SidebarContainer } from "./styles"

const Sidebar = () =>(
  <aside>
    <SidebarContainer>
      <Avatar/>
    <Titulo fontSize={18}>Lucas Gregory</Titulo>
    <Paragrafo fontSize={18} tipo="secundario">oLucasGregory</Paragrafo>
    <Descricao tipo="principal" fontSize={12} >Desenvolvedor Front-End</Descricao>
    <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>


  </aside>
)

export default Sidebar