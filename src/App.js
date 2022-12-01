import { Component, Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import Post from './pages/post';
import Home from './pages/home';
import Layout from './pages/layout';
import LayoutAdmin from './pages/layoutAdmin';

import Skeleton from './components/skeleton';
import './styles/skeleton.css';

const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const NoPage = lazy(() => import('./pages/nopage'));
const Login = lazy(() => import('./pages/login'));
const AdminPost = lazy(() => import('./pages/adminPost'));

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
                <Route path='/admin' element={<LayoutAdmin />}>
                    <Route index element={
                        <Suspense fallback={<Skeleton />}>
                            <Login />
                        </Suspense>
                    } />
                    <Route path='post' element={
                        <Suspense fallback={<Skeleton />}>
                            <AdminPost />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        )
    }
}

export default App;