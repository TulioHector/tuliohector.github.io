import { Component, Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import Post from './pages/post';
import Home from './pages/home';
import Layout from './pages/layout';

import Skeleton from './components/skeleton';
import './styles/skeleton.css';

const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const NoPage = lazy(() => import('./pages/nopage'));

class App extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="about"
                        element={
                            <>
                            <Suspense fallback={<Skeleton />}>
                                <About />
                            </Suspense>
                            </>
                        }
                    />
                    <Route
                        path="contact"
                        element={
                            <>
                            <Suspense fallback={<Skeleton />}>
                                <Contact />
                            </Suspense>
                            </>
                        }
                    />
                    <Route 
                        exact path="/posts/:post/:id" 
                        element={
                            <>
                            <Suspense fallback={<Skeleton />}>
                                <Post />
                            </Suspense>
                            </>
                        } />
                    <Route exact path="*" element={<NoPage />} />
                </Route>
            </Routes>
        )
    }
}

export default App;