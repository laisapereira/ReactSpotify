import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import ListTrack from "../pages/ListTrack";
import Login from "../pages/Login";
import { useEffect, useState } from "react";

export function Router() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = window.location.hash;
    const _token = hash.split("&")[0].split("=")[1];
    window.localStorage.setItem("token", _token);
    setToken(_token);

    if (_token) {
      setToken(_token);
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
