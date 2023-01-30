import Header from './Components/Partials/Header';
import { ContainerStyle } from './Components/Styled/Container.style'
import AppRouter from './Components/App/AppRouter/AppRouter'

function App() {
  return (
    <ContainerStyle maxwidth="1024">
      <Header />
      <AppRouter />
    </ContainerStyle>
  );
}

export default App;
