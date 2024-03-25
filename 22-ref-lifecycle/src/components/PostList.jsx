import { useEffect, useState } from 'react';
import { fakePost } from './FakePost';
import axios from 'axios';
import PostItem from './PostItem';
export function PostList() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setPost(fakePost);
        }, 2000);
    }, []);
    return (
        <>
            {post.length === 0 ? (
                <h1>Loading...</h1>
            ) : (
                <ul>
                    {post.map((post) => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
export function PostList2() {
    const [post, setPost] = useState([]);
    const axiosGet = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setTimeout(() => {
            setPost(res.data);
        }, 2000);
    };
    return (
        <>
            <button onClick={axiosGet}>불러오기</button>
            {post.length === 0 ? (
                <h1>Loading...</h1>
            ) : (
                <ul>
                    {post.map((post) => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export function PostList3() {
    const [posts, setPosts] = useState([]);
    const get = async () => {
        const res = axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
    };
    useEffect(() => {
        get();
    });
    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
    //         setPost(res.data);
    //     });
    // }, []);
    return (
        <div className="post_list">
            <h1>실습 해답</h1>
            {posts.length > 0 ? (
                posts.map((post) => {
                    return <PostItem post={post} key={post.id} />;
                })
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
