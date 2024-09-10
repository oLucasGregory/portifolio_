import Avatar from "../../components/Avatar"
import Contatos from "../../components/Contatos"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Tittle"
import { BotaoTema, Descricao, SidebarContainer } from "./styles"

const Sidebar = () =>(
  <aside>
    <SidebarContainer>
      <Avatar/>
    <Titulo fontSize={18}>Lucas Gregory</Titulo>
    <Paragrafo fontSize={18} tipo="secundario">oLucasGregory</Paragrafo>
    <Contatos/>
    <Descricao tipo="secundario" fontSize={12} >Desenvolvedor Front-End</Descricao>
    
    </SidebarContainer>


  </aside>
)

export default Sidebar