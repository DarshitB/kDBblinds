import "./App.css";
import Home from "./pages/home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";
import ProductList from "./pages/ProductList";
import Products from "./pages/Products";
import Login from "./pages/login";
import Register from "./pages/Register";
import Cart from "./pages/cart";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Success from "./pages/success";
import YourOrder from "./pages/yourOrder";
function App() {
  const user = useSelector((state) => state.user.currentUser);

  const [Redirectreggister, setRedirectreggister] = useState(false);
  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route path="/yourorder">
          <YourOrder />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/blindlist">
          <ProductList />
        </Route>
        <Route path="/blindlist/:id" exact>
          <ProductList />
        </Route>
        <Route path="/blinds">
          <Products />
        </Route>
        <Route path="/blinds/:id">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login"> {user ? <Redirect to="/" /> : <Login />} </Route>
        <Route path="/register">
          {Redirectreggister ? (
            <Redirect to="/login" />
          ) : (
            <Register updaterespons={setRedirectreggister} />
          )}
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <h2>pagenot found</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
