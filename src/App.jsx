import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { AppRoutes } from "./routes/appRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <ScrollToTop />
        <Navbar />

        <AppRoutes />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
