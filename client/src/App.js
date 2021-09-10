import './App.css';
import {BrowserRouter,Switch,NavLink,Route} from "react-router-dom" 
//component
import  Header  from './component/header/Header';
import  Home from './component/Home/Home';
import Cart from "./component/cart/Cart"
import DetailView from "./component/product/DetailView"
import ContextProvider from './context/ContextProvider';



function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
          <Header/>
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route  exact path="/cart" component={Cart}/>
          <Route exact path="/product/:id" component={DetailView}/>
        </Switch>
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
