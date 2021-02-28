import { BrowserRouter as Router,  Route,  Redirect,  Switch,} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";


import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Carrito from "./Pages/Carrito";

import "./styles.css";

function App() {
  
  return (
    <>
      <Router>  
        <Nav />
        <Provider store={store}>

        <Switch>  
          <Route path="/home" component={Home} />  
          <Route path="/carrito" component={Carrito} /> 
           <Redirect to="/home" />
        </Switch>
        </Provider>
      </Router>
    </>
  );
}

export default App;

