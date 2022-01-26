import {
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { ContactPage } from "../pages/ContactPage/ContactPage";
import { FrontPage } from "../pages/Frontpage/Frontpage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ProductPage } from "../pages/ProductPage/ProductPage";

// Component der indeholder vores routes
export function Routes (){

    return (
    <Switch>
      <Route path="/home">
        <FrontPage />
      </Route>

      <Route path="/products">
        <ProductPage/>
      </Route>

      <Route path="/contact">
        <ContactPage/>
      </Route>
      
      <Route path="/login">
        <LoginPage/>
      </Route>

      <Route exact path="/">
        <Redirect to="/home" />
      </Route>

      <Route path="/">
        <h2>404 siden findes ikke....</h2>
      </Route>
    </Switch>
    )
}