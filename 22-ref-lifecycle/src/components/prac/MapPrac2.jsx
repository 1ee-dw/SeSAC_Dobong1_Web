import { useState } from 'react';

function MapPrac2() {
    const [post, setPost] = useState([]);
    const [writer, setWriter] = useState('');
    const [title, setTitle] = useState('');
    const [searchOpt, setSearchOpt] = useState('title');
    const [searchKey, setSearchKey] = useState('');
    const [res, setRes] = useState([]);

    const insertPost = () => {
        const newPost = post.concat({ id: post.length === 0 ? 1 : post.length + 1, writer: writer, title: title });
        setPost(newPost);
        setWriter('');
        setTitle('');
    };

    const showAllPost = () => {
        setRes(post);
    };

    const searchPost = () => {
        if (!searchKey.trim()) {
            setRes(post);
        } else {
            const result = post.filter((post) => {
                if (searchOpt === 'title') {
                    return post.title.includes(searchKey);
                } else if (searchOpt === 'writer') {
                    return post.writer.includes(searchKey);
                }
                return true;
            });
            setRes(result);
        }
    };

    const dpPost = res.length > 0 || searchKey.trim() ? res : post;

    //     if (searchKey.trim()) {
    //         return post;
    //     } else if (res.length > 0) {
    //         return res;
    //     }
    // };

    return (
        <div>
            <div>
                <fieldset display="flex">
                    <div>
                        <label htmlFor="writer">작성자: </label>
                        <input
                            type="text"
                            value={writer}
                            onChange={(e) => {
                                setWriter(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="title">제목: </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <input type="button" value="작성" onClick={insertPost} />
                    </div>
                </fieldset>
            </div>
            <div>
                <div>
                    <select
                        name="searchOpt"
                        value={searchOpt}
                        onChange={(e) => {
                            setSearchOpt(e.target.value);
                        }}
                    >
                        <option value="title">제목</option>
                        <option value="writer">작성자</option>
                    </select>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="검색어를 입력하세요"
                        value={searchKey}
                        onChange={(e) => {
                            setSearchKey(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <input type="button" value="검색" onClick={searchPost} />
                </div>
                <div>
                    <input type="button" value="전체" onClick={showAllPost} />
                </div>
            </div>
            <div>
                <table border="2">
                    <colgroup>
                        <col width="60px" />
                        <col width="240px" />
                        <col width="120px" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    {dpPost.length === 0 ? (
                        <tbody>
                            <tr>
                                <td colSpan={3}>
                                    <h1>데이터가 없습니다..</h1>
                                </td>
                            </tr>
                        </tbody>
                    ) : (
                        <tbody>
                            {dpPost.map((post) => (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.writer}</td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
}

export default MapPrac2;
