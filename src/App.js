import './App.module.css';
import {Routes,Route} from 'react-router-dom'
import CartContextProvider from "./Context/CartContextProvider";
// Import components
import Home from "./components/Home"
import Blog from "./components/Blog"
import Event from "./components/Event"
import Contact from "./components/Contact"
import Error from "./components/Error"
import NavBar from "./components/NavBar";
import Cart from "./components/Cart"
// import Details from "./components/Details";

// Import style file


function App() {
  return (
      <>
          <CartContextProvider>
              <NavBar/>

          <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/event" element={<Event/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/cart" element={<Cart/>}/>
            {/*<Route path="/details/:id" element={<Details/>}/>*/}
            <Route path="/*" element={<Error/>}></Route>
          </Routes>
          </CartContextProvider>
      </>
  );
}
export default App;
