import { Component } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/adminpost.css';

function attacheNavigate(Component) {
    return props => <Component navHook={useNavigate()} />;
}

class AdminPost extends Component {
    static navigate = {};

    constructor(props) {
        super(props);
        this.navigate = this.props.navHook;
    }

    async componentDidMount() {
        const authToken = sessionStorage.getItem('blogauth');
        if (authToken === null) {
            console.log("y que onda?");
            this.navigate('/admin');
        }
    }

    handleLogout() {
        sessionStorage.removeItem('blogauth');
        this.navigate('/admin');
    }
    uploadPost() {
        console.log("hola upload post");
    }
    render() {
        return (
            <>
                <header>
                    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                        <div className="position-sticky">
                            <div className="list-group list-group-flush mx-3 mt-4">
                                <a href="!#" className="list-group-item list-group-item-action py-2 ripple active" aria-current="true">
                                    <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Up Load Post</span>
                                </a>
                                <a href="!#" className="list-group-item list-group-item-action py-2 ripple ">
                                    <i className="fas fa-chart-area fa-fw me-3"></i><span>Webiste traffic</span>
                                </a>

                            </div>
                        </div>
                    </nav>
                    <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                        <div className="container-fluid">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#sidebarMenu"
                                aria-controls="sidebarMenu"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <i className="fas fa-bars"></i>
                            </button>

                            <a className="navbar-brand" href="!#">
                                <img
                                    src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                                    height="25"
                                    alt=""
                                    loading="lazy" />
                            </a>

                            <form className="d-none d-md-flex input-group w-auto my-auto">
                                <input
                                    autoComplete="off"
                                    type="search"
                                    className="form-control rounded"
                                    placeholder='Search (ctrl + "/" to focus)'
                                    style={{ minWidth: "225px" }}
                                />
                                <span className="input-group-text border-0">
                                    <i className="fas fa-search"></i></span>
                            </form>

                            <ul className="navbar-nav ms-auto d-flex flex-row">
                                <li className="nav-item dropdown">
                                    <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                                        href="!#"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-mdb-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="fas fa-bell"></i>
                                        <span className="badge rounded-pill badge-notification bg-danger">1</span>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="!#">Some news</a></li>
                                        <li><a className="dropdown-item" href="!#">Another news</a></li>
                                        <li>
                                            <a className="dropdown-item" href="!#">Something else here</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link me-3 me-lg-0" href="!#">
                                        <i className="fas fa-fill-drip"></i>
                                    </a>
                                </li>

                                <li className="nav-item me-3 me-lg-0">
                                    <a className="nav-link" href="!#">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                                        href="!#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-mdb-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="united kingdom flag m-0"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="!#">
                                                <i className="united kingdom flag"></i>English
                                                <i className="fa fa-check text-success ms-2"></i></a>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <a className="dropdown-item" href="!#">
                                                <i className="poland flag"></i>Spanish
                                            </a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                                        href="!#"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-mdb-toggle="dropdown"
                                        aria-expanded="false">
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                                            className="rounded-circle"
                                            height="22"
                                            alt=""
                                            loading="lazy" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="!#">My profile</a></li>
                                        <li><a className="dropdown-item" href="!#">Settings</a></li>
                                        <li><Link className="dropdown-item" to='/admin' onClick={this.handleLogout}>Logout</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <main style={{ marginTop: "58px" }}>
                    <div className="container pt-4">
                        <section className="mb-4">
                            <div className="card">
                                <div className="card-header py-3">
                                    <h5 className="mb-0 text-center"><strong>UpLoad new Post</strong></h5>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                            <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                                            <textarea type="text" className="form-control form-control-lg" id="exampleInputPassword1" rows="3"></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="datepublish" className="form-label">Date Publish</label>
                                            <input type="text" className="form-control form-control-lg" id="datepublish" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="formFile" className="form-label">file MarckDown</label>
                                            <input className="form-control" type="file" id="formFileMD"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="formFile" className="form-label">file Cover</label>
                                            <input className="form-control" type="file" id="formFileCover"/>
                                        </div>
                                        <button type="button" className="btn btn-primary" onClick={this.uploadPost.bind(this)}>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="row">
                                <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between px-md-1">
                                                <div className="align-self-center">
                                                    <i className="fas fa-pencil-alt text-info fa-3x"></i>
                                                </div>
                                                <div className="text-end">
                                                    <h3>278</h3>
                                                    <p className="mb-0">New Posts</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between px-md-1">
                                                <div className="align-self-center">
                                                    <i className="far fa-comment-alt text-warning fa-3x"></i>
                                                </div>
                                                <div className="text-end">
                                                    <h3>156</h3>
                                                    <p className="mb-0">New Comments</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between px-md-1">
                                                <div className="align-self-center">
                                                    <i className="fas fa-chart-line text-success fa-3x"></i>
                                                </div>
                                                <div className="text-end">
                                                    <h3>64.89 %</h3>
                                                    <p className="mb-0">Bounce Rate</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between px-md-1">
                                                <div className="align-self-center">
                                                    <i className="fas fa-map-marker-alt text-danger fa-3x"></i>
                                                </div>
                                                <div className="text-end">
                                                    <h3>423</h3>
                                                    <p className="mb-0">Total Visits</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between px-md-1">
                                                <div>
                                                    <h3 className="text-danger">278</h3>
                                                    <p className="mb-0">New Projects</p>
                                                </div>
                                                <div className="align-self-center">
                                                    <i className="fas fa-rocket text-danger fa-3x"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between px-md-1">
                                                <div>
                                                    <h3 className="text-success">156</h3>
                                                    <p className="mb-0">New Clients</p>
                                                </div>
                                                <div className="align-self-center">
                                                    <i className="far fa-user text-success fa-3x"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between px-md-1">
                                                <div>
                                                    <h3 className="text-warning">64.89 %</h3>
                                                    <p className="mb-0">Conversion Rate</p>
                                                </div>
                                                <div className="align-self-center">
                                                    <i className="fas fa-chart-pie text-warning fa-3x"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between px-md-1">
                                                <div>
                                                    <h3 className="text-info">423</h3>
                                                    <p className="mb-0">Support Tickets</p>
                                                </div>
                                                <div className="align-self-center">
                                                    <i className="far fa-life-ring text-info fa-3x"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between px-md-1">
                                                <div>
                                                    <h3 className="text-info">278</h3>
                                                    <p className="mb-0">New Posts</p>
                                                </div>
                                                <div className="align-self-center">
                                                    <i className="fas fa-book-open text-info fa-3x"></i>
                                                </div>
                                            </div>
                                            <div className="px-md-1">
                                                <div className="progress mt-3 mb-1 rounded" style={{ height: "7px" }}>
                                                    <div
                                                        className="progress-bar bg-info"
                                                        role="progressbar"
                                                        style={{ width: "80%" }}
                                                        aria-valuenow="80"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between px-md-1">
                                                <div>
                                                    <h3 className="text-warning">156</h3>
                                                    <p className="mb-0">New Comments</p>
                                                </div>
                                                <div className="align-self-center">
                                                    <i className="far fa-comments text-warning fa-3x"></i>
                                                </div>
                                            </div>
                                            <div className="px-md-1">
                                                <div className="progress mt-3 mb-1 rounded" style={{ height: "7px" }}>
                                                    <div
                                                        className="progress-bar bg-warning"
                                                        role="progressbar"
                                                        style={{ width: "35%" }}
                                                        aria-valuenow="35"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between px-md-1">
                                                <div>
                                                    <h3 className="text-success">64.89 %</h3>
                                                    <p className="mb-0">Bounce Rate</p>
                                                </div>
                                                <div className="align-self-center">
                                                    <i className="fas fa-mug-hot text-success fa-3x"></i>
                                                </div>
                                            </div>
                                            <div className="px-md-1">
                                                <div className="progress mt-3 mb-1 rounded" style={{ height: "7px" }}>
                                                    <div
                                                        className="progress-bar bg-success"
                                                        role="progressbar"
                                                        style={{ width: "60%" }}
                                                        aria-valuenow="60"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between px-md-1">
                                                <div>
                                                    <h3 className="text-danger">423</h3>
                                                    <p className="mb-0">Total Visits</p>
                                                </div>
                                                <div className="align-self-center">
                                                    <i className="fas fa-map-signs text-danger fa-3x"></i>
                                                </div>
                                            </div>
                                            <div className="px-md-1">
                                                <div className="progress mt-3 mb-1 rounded" style={{ height: "7px" }}>
                                                    <div
                                                        className="progress-bar bg-danger"
                                                        role="progressbar"
                                                        style={{ width: "40%" }}
                                                        aria-valuenow="40"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="row">
                                <div className="col-xl-6 col-md-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between p-md-1">
                                                <div className="d-flex flex-row">
                                                    <div className="align-self-center">
                                                        <i className="fas fa-pencil-alt text-info fa-3x me-4"></i>
                                                    </div>
                                                    <div>
                                                        <h4>Total Posts</h4>
                                                        <p className="mb-0">Monthly blog posts</p>
                                                    </div>
                                                </div>
                                                <div className="align-self-center">
                                                    <h2 className="h1 mb-0">18,000</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between p-md-1">
                                                <div className="d-flex flex-row">
                                                    <div className="align-self-center">
                                                        <i
                                                            className="far fa-comment-alt text-warning fa-3x me-4"
                                                        ></i>
                                                    </div>
                                                    <div>
                                                        <h4>Total Comments</h4>
                                                        <p className="mb-0">Monthly blog posts</p>
                                                    </div>
                                                </div>
                                                <div className="align-self-center">
                                                    <h2 className="h1 mb-0">84,695</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-md-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between p-md-1">
                                                <div className="d-flex flex-row">
                                                    <div className="align-self-center">
                                                        <h2 className="h1 mb-0 me-4">$76,456.00</h2>
                                                    </div>
                                                    <div>
                                                        <h4>Total Sales</h4>
                                                        <p className="mb-0">Monthly Sales Amount</p>
                                                    </div>
                                                </div>
                                                <div className="align-self-center">
                                                    <i className="far fa-heart text-danger fa-3x"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between p-md-1">
                                                <div className="d-flex flex-row">
                                                    <div className="align-self-center">
                                                        <h2 className="h1 mb-0 me-4">$36,000.00</h2>
                                                    </div>
                                                    <div>
                                                        <h4>Total Cost</h4>
                                                        <p className="mb-0">Monthly Cost</p>
                                                    </div>
                                                </div>
                                                <div className="align-self-center">
                                                    <i className="fas fa-wallet text-success fa-3x"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </>
        )
    }
}

export default attacheNavigate(AdminPost);