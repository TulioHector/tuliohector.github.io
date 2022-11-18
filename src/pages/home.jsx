import { Component, Fragment } from 'react';
import { pageConfig } from '../components/context';
import Database from '../components/Firebase';

class Home extends Component {
    info = [];
    constructor(props) {
        super(props);
        this.state =  {
            posts: this.info
        };
    }

    async componentDidMount() {
        try {
            const Fetchdata = async () => {
                pageConfig.backgroundImage = "url('assets/img/home-bg.jpg')";
                console.log("estoy aca");
                const list = await Database.getPostList();
                //list.then((items) => {
                    list.forEach((element) => {
                        const data = element.data();
                        this.info.push(data);
                        console.log(data);
                 //   });
                });
                this.setState({posts: this.info});
            }
            await Fetchdata();
        } catch (error) { console.log(error) }
    }

    render() {
        return (
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        {this.state.posts.map(item => (
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