import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Post from './pages/post';
import NoPage from './pages/nopage';

export const App = () => (
    <Router>
        <Routes>
            {/* Exact match to avoid 
            overriding other routes */}
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts/:id/:cover" element={<Post />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </Router>
);

export default App