// import logo from './logo.svg';
import './App.css';
// import Product from "./Component/Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Cart from './Component/Cart';
import RootLayout from './Component/RootLayout';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>

      </Route>
    

  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
  {/* <Product/> */}
    </div>
  );
}

export default App;
