import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Properties } from "./pages/Properties";
import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "properties":
        return <Properties setCurrentPage={setCurrentPage} />;
      case "contact":
        return <Contact setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
