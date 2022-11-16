import { Component, Fragment } from 'react';
import {pageConfig} from '../components/context';
import metadata from '../blog.json';

class Home extends Component {
    constructor(props) {
        super(props);
        pageConfig.backgroundImage ="url('assets/img/home-bg.jpg')";
    }
    render() {
        return (
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        {metadata.posts.map(item => (
                            // Without the `key`, React will fire a key warning
                            <Fragment key={item.id}>
                                <div className="post-preview" id={item.id}>
                                    <a href={`${item.url}/${item.cover}`}>
                                        <h2 className="post-title">{item.Title}</h2>
                                        <h3 className="post-subtitle">{item.Description}</h3>
                                    </a>
                                    <p className="post-meta">
                                        Posted by
                                        <a href="#!"> {item.Author} </a>
                                         {item.DatePublish}
                                    </p>
                                </div>
                                <hr className="my-4" />
                            </Fragment>
                        ))}
                        <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                    </div>
                </div>
            </div>
        )
    }
};
  
export default Home;