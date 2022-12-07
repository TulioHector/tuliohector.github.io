'use client';

import { Component, Fragment } from "react";
import { PageContext } from '../../components/context';
import Database from '../../components/Firebase';

class List extends Component {
    static contextType = PageContext;
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }
    async componentDidMount() {
        try {
            const Fetchdata = async () => {
                let info = [];
                const list = await Database.getPostList();
                list.forEach((element) => {
                    const data = element.data();
                    info.push(data);
                });
                this.setState({ posts: info });
            }
            await Fetchdata();
        } catch (error) { console.log(error) }
    }

    render() {
        return (
            <>
                {this.state.posts.map(item => (
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
            </>
        );
    }
}

export default List;