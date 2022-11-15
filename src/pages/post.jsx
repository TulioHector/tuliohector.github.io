import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from "markdown-to-jsx"
import Code from "../components/Code"
import { pageConfig } from '../components/context';
import '../styles/Post.css'

const Post = () => {
    const [postContent, setPostcontent] = useState('');
    const [isDark, setIsDark] = useState(true);
    const { id, cover } = useParams();
    
    const postUrl = `/posts/${id}`;
    const fetchFile = useCallback(() => {
        fetch(postUrl + '.md')
            .then(response => response.text())
            .then(response => setPostcontent(response))
            .catch(err => console.log(err))
    }, [postUrl]);

    useEffect(() => {
        fetchFile();

        pageConfig.backgroundImage = `url('./assets/img/${cover}')`;
        pageConfig.pageTitle = "Post Title";
        pageConfig.pageSubTitle = "Post Descriptions";
    }, [fetchFile,cover])
    return (
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
                                            isDark,
                                            setIsDark
                                        }
                                    }
                                }
                            }}
                        >
                            {postContent}
                        </Markdown>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Post;