import { Component } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from "markdown-to-jsx";
import Code from "../components/Code";
import { PageContext } from '../components/context';
import Database from '../components/Firebase';
import '../styles/Post.css';
import PageHeader from '../components/PageHeader';
import { Helmet } from 'react-helmet-async';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class Post extends Component {
    static contextType = PageContext;
    static idPost = 0;
    static postName = {};

    constructor(props) {
        super(props);
        const { post, id } = this.props.params;
        this.idPost = id;
        this.postName = post;
        this.state = {
            postContent: '',
            isDark: true,
            setIsDark: (toogle) => {
                this.setState({ isDark: toogle });
            }
        }
        this.getTask = this.getTask.bind(this);
    }

    async getTask() {
        try {
            const idPost = Number(this.idPost);
            const postUrl = `/posts/${this.postName}`;
            const postDb = Database.getPOstById(idPost);
            const response = await fetch(postUrl + '.md');
            const mdFile = await response.text();

            this.setState({ postContent: mdFile });

            const result = await postDb.then((item) => {
                let post;
                item.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    //console.log(doc.id, " => ", doc.data());
                    post = doc.data();
                });
                return post;
            }).catch(err => console.log(err));

            let pageConfig = this.context.pageSettings;
            const settings = {
                ...pageConfig,
                backgroundImage: `url('../../assets/posts/${idPost}/${result.cover}')`,
                pageTitle: "",
                pageSubTitle: "",
            }
            this.context.setPageSettings(settings);
            this.setState({
                postInfo: {...result}
            });
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async componentDidMount() {
        try {
            await this.getTask();
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        if(this.state.postInfo !== undefined) {
            return (
                <>
                    <PageHeader />
                    <Helmet>
                        <title>{this.postName}</title>
                        <link rel="canonical" href={`https://tuliohector.github.io/posts/${this.postName}/${this.idPost}`} data-react-helmet="true"/>
                        <meta property="og:title" content={`${this.state.postInfo.Title}`} data-react-helmet="true"/>
                        <meta property="og:type" content="website" data-react-helmet="true"/>
                        <meta property="og:url" content={`https://tuliohector.github.io/posts/${this.postName}/${this.idPost}`} data-react-helmet="true"/>
                        <meta property="og:image" content={`https://tuliohector.github.io/assets/posts/${this.idPost}/${this.state.postInfo.cover}`} data-react-helmet="true"/>
                        <meta property='og:description' content={`${this.state.postInfo.description}`}/>
                    </Helmet>
                    <article className="mb-4">
                        <div className="container px-4 px-lg-5">
                            <div className="row gx-4 gx-lg-5 justify-content-center">
                                <div className="col-md-10 col-lg-8 col-xl-7">
                                    <Markdown
                                        options={{
                                            overrides: {
                                                Code: {
                                                    component: Code,
                                                    props: {
                                                        isDark: this.state.isDark,
                                                        setIsDark: this.state.setIsDark
                                                    }
                                                }
                                            }
                                        }}
                                    >
                                        {this.state.postContent}
                                    </Markdown>
                                </div>
                            </div>
                        </div>
                    </article>
                </>
            );
        }else {
            return null;
        }        
    }
}

export default withParams(Post);