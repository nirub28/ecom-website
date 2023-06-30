import {Home , Navbar , Cart , Products , addProduct as Add} from '../pages';
import { Routes, Route } from "react-router-dom";


const Page404 = () => {
  return <h1>404 Error</h1>;
};

function App() {
 
  return (
    <div className="App">
      <Navbar />
       <Routes>
        <Route exact path="/" element={<Home />}>
          {" "}
        </Route>
        <Route exact path="/products" element={<Products />}>
          {" "}
        </Route>
        <Route exact path="/cart" element={<Cart />}>
          {" "}
        </Route>
        <Route exact path="/add" element={<Add />}>
          {" "}
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>


    </div>
  );
}

export default App;