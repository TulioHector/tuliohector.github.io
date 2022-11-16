import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Post from './pages/post';
import NoPage from './pages/nopage';

export const App = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/posts/:id/:cover" element={<Post />} />
            <Route exact path="*" element={<NoPage />} />
        </Routes>
    </Router>
);

export default App