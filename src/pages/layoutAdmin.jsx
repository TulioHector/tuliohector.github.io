import { Component } from 'react';
import { Outlet } from "react-router-dom";
import 'mdb-ui-kit/css/mdb.min.css';
import 'mdb-ui-kit/js/mdb.min.js'

class LayoutAdmin extends Component {
    render() {
        return (
            <>
                <Outlet />
            </>
        )
    }
}

export default LayoutAdmin;