import "./App.css";
import AlbumGallery from "./Components/AlbumGallery";
import Header from "./Components/Header";
import { Router } from "./Router/routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
