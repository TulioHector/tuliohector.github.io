import {Component} from "react";
import {pageConfig} from '../components/context';
  
class ContactMe extends Component {
    constructor(props) {
        super(props);
        pageConfig.backgroundImage = "url('assets/img/contact-bg.jpg')";
        pageConfig.pageTitle = "Contact Me";
        pageConfig.pageSubTitle = "Contact with me";
    }
    render() {
        return (
            <main className="mb-4">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                                <div className="my-5">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
          );
    }
};
  
export default ContactMe;