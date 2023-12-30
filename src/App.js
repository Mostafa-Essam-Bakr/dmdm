import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Home.css"

import { Routes,Route, BrowserRouter } from "react-router-dom"
import Home from "./Home"
import Book from "./Book"
import Hotel from "./Hotel";

export default function App(){
  return ( <div>

<Routes>

<Route path="/" element={<Home/>}/>










  


  <Route path="Hotel" element={<Hotel/>}/>



  <Route path="/Book" element={<Book/>}/>











</Routes>
  </div>)
}