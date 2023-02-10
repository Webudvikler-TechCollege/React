import Header from './Components/Partials/Header';
import { ContainerStyle } from './Components/Styled/Container.style'
import AppRouter from './Components/App/AppRouter/AppRouter'
import Footer from './Components/Partials/Footer';

function App() {
  return (
    <ContainerStyle maxwidth="1024">
      <Header>
      </Header>
        <AppRouter />
      <Footer />
    </ContainerStyle>
  );
}

export default App;
