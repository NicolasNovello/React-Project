import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="PROXIMAMENTE..." />
      <Footer />
    </>
  );
}

export default App;
