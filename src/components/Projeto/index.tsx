import Paragrafo from "../Paragrafo";
import Titulo from "../Tittle";
import { Card, LinkBotao } from "./styles";
import { Lista } from "./styles";






const Projeto = () => (

  <Lista>
    <li>
    <Card>
       <a href="https://to-do-vue-snowy.vercel.app/" target="_blank" rel="noreferrer" ><img src="https://servidor-estaticos-self-seven.vercel.app/To-do-list.png" alt="To do list" /></a>
       <Titulo>Lista de Tarefas</Titulo>
         <Paragrafo tipo="secundario">
          Lista de Tarefas feita com vue Js
         </Paragrafo>
         <LinkBotao>Ver mais</LinkBotao>
     </Card>
    </li>
    <li>
    <Card>
      <a href="https://clone-disney-taupe-gamma.vercel.app/" target="_blank" rel="noreferrer"><img src="https://servidor-estaticos-self-seven.vercel.app/disney-plus.png" alt="Clone Disney plus" /></a>
       <Titulo>Clone da Disney</Titulo>
         <Paragrafo tipo="secundario">
          Lista de Tarefas feita com vue Js
         </Paragrafo>
         <LinkBotao>Ver mais</LinkBotao>

     </Card>
    </li>
  </Lista>

)

export default Projeto