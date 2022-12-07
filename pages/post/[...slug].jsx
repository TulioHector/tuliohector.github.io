'use client';

import { Component } from 'react';
import { withRouter } from 'next/router';
import Markdown from "markdown-to-jsx";
import Code from "../../components/Code";
import { PageContext } from '../../components/context';
import Database from '../../components/Firebase';
import PageHeader from '../../components/PageHeader';
import Head from "next/head";
import Loading from '../../components/Loading';

class Post extends Component {
    static contextType = PageContext;
    static idPost = 0;
    static postName = {};

    constructor(props) {
        super(props);
        const params = props.router.query.slug;
        this.idPost = params[1];;
        this.postName = params[0];
        this.state = {
            postContent: '',
            isDark: true,
            setIsDark: (toogle) => {
                this.setState({ isDark: toogle });
            }
        }
        this.getTask = this.getTask.bind(this);
    }

    static getInitialProps = async ({ query }) => {
        return { query };
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
                postInfo: { ...result }
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
        if (this.state.postInfo !== undefined) {
            return (
                <>
                    <PageHeader />
                    <Head>
                        <title>{this.postName}</title>
                        <link rel="canonical" href={`https://tuliohector.github.io/posts/${this.postName}/${this.idPost}`} data-react-helmet="true" />
                        <meta property="og:title" content={`${this.state.postInfo.Title}`} data-react-helmet="true" />
                        <meta property="og:type" content="website" data-react-helmet="true" />
                        <meta property="og:url" content={`https://tuliohector.github.io/posts/${this.postName}/${this.idPost}`} data-react-helmet="true" />
                        <meta property="og:image" content={`https://tuliohector.github.io/assets/posts/${this.idPost}/${this.state.postInfo.cover}`} data-react-helmet="true" />
                        <meta property='og:description' content={`${this.state.postInfo.description}`} />
                    </Head>
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
        } else {
            return (
                <>
                    <PageHeader />
                    <article className="mb-4">
                        <div className="container px-4 px-lg-5">
                            <div className="row gx-4 gx-lg-5 justify-content-center">
                                <div className="col-md-10 col-lg-8 col-xl-7">
                                    <Loading />
                                </div>
                            </div>
                        </div>
                    </article>
                </>
            )
        }
    }
}

export default withRouter(Post);