import Header from './Components/Partials/Header';
import { ContainerStyle } from './Components/Styled/Container.style'
import AppRouter from './Components/App/AppRouter/AppRouter'
import Footer from './Components/Partials/Footer';
import CartIcon from './Components/App/Cart/CartIcon';

function App() {
  return (
    <ContainerStyle maxwidth="1024">
      <CartIcon></CartIcon>
      <Header>
      </Header>
        <AppRouter />
      <Footer />
    </ContainerStyle>
  );
}

export default App;
