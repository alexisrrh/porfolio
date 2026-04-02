import { BrowserRouter } from "react-router-dom";
import  Navbar  from "./componentes/Navbar";
import  Footer  from "./componentes/Footer";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;