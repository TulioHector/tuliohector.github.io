import { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PageContext } from '../components/context';
import '../styles/login.css';

function attacheNavigate(Component) {
    return props => <Component {...props} navHook={useNavigate()} />;
}

class Login extends Component {
    static navigate = {};
    static contextType = PageContext;

    constructor(props) {
        super(props);
        this.navigate = this.props.navHook;
        this.state = {
            password: "",
            email: ""
        };
        
    }

    async componentDidMount() {
        const authToken = sessionStorage.getItem('blogauth');
        if (authToken !== null) {
            this.navigate('/admin/post');
        }
    }

    handlerInputPassword(event) {
        const fieldValue = event.target.value;
        this.setState({
            password: fieldValue
        });
    }

    handlerInputEmail(event) {
        const fieldValue = event.target.value;
        this.setState({
            email: fieldValue
        });
    }

    handlerLogin(event) {
        const authentication = getAuth();
        signInWithEmailAndPassword(authentication, this.state.email, this.state.password)
            .then((response) => {
                this.navigate('/admin/post');
                sessionStorage.setItem('blogauth', response._tokenResponse.refreshToken)
            }).catch((error) => {
                console.log(error);
                switch (error.code) {
                    case 'auth/invalid-email':
                        toast.error("Los datos ingresados no son correctos!");
                        return;
                    case 'auth/wrong-password':
                        toast.error("Los datos ingresados no son correctos!");
                        return;
                    case 'auth/user-not-found':
                        toast.error("Los datos ingresados no son correctos!");
                        return;
                    case 'auth/email-already-in-use':
                        toast.error('Email usado recientemente.');
                        return;
                    default:
                        toast.error("Error desconocido. Intente mas tarde o los datos ingresados no son correctos!");
                }
            });
    }
    render() {
        return (
            <>
                <ToastContainer />
                <section className="vh-100">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6 text-black">

                                <div className="px-5 ms-xl-4">
                                    <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: "#709085" }}></i>
                                    <span className="h1 fw-bold mb-0">Logo</span>
                                </div>
                                <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                                    <form style={{ width: "23rem" }}>
                                        <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Log in</h3>

                                        <div className="form-outline mb-4">
                                            <input type="email" id="form2Example18" className="form-control form-control-lg" onChange={this.handlerInputEmail.bind(this)} />
                                            <label className="form-label" htmlFor="form2Example18">Email address</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="form2Example28" className="form-control form-control-lg" onChange={this.handlerInputPassword.bind(this)} />
                                            <label className="form-label" htmlFor="form2Example28">Password</label>
                                        </div>

                                        <div className="pt-1 mb-4">
                                            <button className="btn btn-info btn-lg btn-block" type="button" onClick={this.handlerLogin.bind(this)}>Login</button>
                                        </div>

                                        <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-6 px-0 d-none d-sm-block">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                                    alt="Login" className="w-100 vh-100" style={{ objectFit: "cover", objectPosition: "left" }} />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default attacheNavigate(Login);