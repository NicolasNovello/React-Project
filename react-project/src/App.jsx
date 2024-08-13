import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ItemCount } from "./components/ItemCount/ItemCount";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a nuestra tienda" />
      <ItemCount />
      <Footer />
    </>
  );
}

export default App;
