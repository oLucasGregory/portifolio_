import Titulo from "../../components/Tittle";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Comecei aprender a programar por hobbie, e criei amor pelas linhas de codigos, então decidir que era isso que eu queria fazer, e hoje ainda estudo para me aperfeiçoar cada dia e me tornar um dev ainda mais competente 
    </Paragrafo>
    <GithubSecao>
       <img src="https://github-readme-stats.vercel.app/api?username=oLucasGregory&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" alt=""/>
       <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=oLucasGregory&layout=compact&langs_count=7&theme=dracula" alt=""/>
    </GithubSecao>
  </section>
)

export default Sobre