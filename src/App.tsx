import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Router } from "./Router/routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
