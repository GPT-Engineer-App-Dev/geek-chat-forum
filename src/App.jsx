import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Categories from "./pages/Categories.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
