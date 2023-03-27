import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Carrousel from "./Carrousel";
import MapContainer from "./Mapa";
import Menu from "./Menu";
import Curriculum from "./Curriculum";
import Carrouselinho from "./mockups";
import Login from "./Login";
import Logout from "./logout";

const Inicio = () => {
  return (
    <div>
      <Router>

        <Menu></Menu>

        <Routes>

        <Route exact path="" element={<Home></Home>}></Route>

          <Route index element={<Home></Home>}></Route>

          <Route path={"/galeria"} element={<Carrousel></Carrousel>}></Route>

          <Route path={"/mapa"} element={<MapContainer></MapContainer>}></Route>

          <Route path={"/curriculum"} element={<Curriculum></Curriculum>}></Route>

          <Route path={"/mockups"} element={<Carrouselinho></Carrouselinho>}></Route>
          
          <Route path={"/login"} element={<Login></Login>}></Route>

          <Route path={"/logout"} element={<Logout></Logout>}></Route>



        </Routes>
      </Router>
    </div>
  )
}

export default Inicio
