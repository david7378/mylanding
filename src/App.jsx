import Navbar from "./components/header/Navbar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Home />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
