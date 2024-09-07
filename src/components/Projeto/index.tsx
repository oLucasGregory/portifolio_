import Paragrafo from "../Paragrafo";
import Titulo from "../Tittle";
import { Card, LinkBotao } from "./styles";






const Projeto = () => (

  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">
      Lista de Tarefas feita com vue Js
    </Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>

)

export default Projeto