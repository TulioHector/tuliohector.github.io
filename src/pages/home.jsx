import { Component, Fragment, Suspense } from 'react';
import { PageContext } from '../components/context';
import Database from '../components/Firebase';
import Skeleton from '../components/skeleton';
import '../styles/skeleton.css';
import PageHeader from '../components/PageHeader';

class Home extends Component {
    info = [];
    static contextType = PageContext;

    constructor(props) {
        super(props);

        this.state = {
            posts: this.info
        };
    }

    async componentDidMount() {
        try {
            const Fetchdata = async () => {

                const list = await Database.getPostList();
                list.forEach((element) => {
                    const data = element.data();
                    this.info.push(data);
                });
                this.setState({ posts: this.info });
            }
            await Fetchdata();
        } catch (error) { console.log(error) }
    }

    render() {
        return (
            <>
            <PageHeader />
                <Suspense fallback={<Skeleton />}>
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                {this.state.posts.map(item => (
                                    // Without the `key`, React will fire a key warning
                                    <Fragment key={item.id}>
                                        <div className="post-preview" id={item.id}>
                                            <a href={`${item.url}/${item.id}`}>
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
                </Suspense>
            </>
        )
    }
};

export default Home;