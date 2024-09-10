import EstiloGlobal, { Container } from "./styles";
import Sidebar from "./containers/Sidebar";
import Sobre from "./containers/Sobre";
import Projetos from "./containers/Projetos";
import Header from "./containers/header";


function App() {
  return (
    <>
    <EstiloGlobal/>

    <Container>
      <Sidebar/>
      <main>
         <Header/>
         <Sobre/>
         <Projetos/>
       </main>
    </Container>

    </>
  )
}

export default App;
