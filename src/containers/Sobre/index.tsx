import Titulo from "../../components/Tittle";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quasi! Asperiores, illum! Nam, autem facere. Recusandae obcaecati odit consequuntur quia, natus aliquam corrupti porro officiis cupiditate est ullam veritatis repellat!
    </Paragrafo>
    <GithubSecao>
       <img src="https://github-readme-stats.vercel.app/api?username=oLucasGregory&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" alt=""/>
       <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=oLucasGregory&layout=compact&langs_count=7&theme=dracula" alt=""/>
    </GithubSecao>
  </section>
)

export default Sobre