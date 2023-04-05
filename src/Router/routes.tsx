import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import ListTrack from "../pages/ListTrack";
import Login from "../pages/Login";
import { useEffect, useState } from "react";
import { setClientToken } from "../api/spotify";

export function Router() {
  const [token, setToken] = useState("");
 

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.history.replaceState({}, document.title, window.location.pathname);

    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token)
    } else {
      setToken(token as string);
      setClientToken(token as string)
    }
  }, []);


  return !token ? (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ListTrack />} path="/list-track" />
      </Routes>
    </BrowserRouter>
  );
}
