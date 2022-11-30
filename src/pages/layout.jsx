import { Component } from 'react';
import { Outlet } from "react-router-dom";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageContextProvider from '../components/context';

class Layout extends Component {
    render() {
        return (
            <>
                <Navigation />
                <PageContextProvider>
                    {this.props.children}
                    <Outlet />
                </PageContextProvider>
                <Footer />
            </>
        );
    }
}

export default Layout;