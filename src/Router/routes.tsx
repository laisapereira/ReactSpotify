import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import ListTrack from "../pages/ListTrack";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<Home/>} path="/"/>
        <Route element = {<ListTrack/>}path="/list-track"/>
      </Routes>
    </BrowserRouter>
  );
}
