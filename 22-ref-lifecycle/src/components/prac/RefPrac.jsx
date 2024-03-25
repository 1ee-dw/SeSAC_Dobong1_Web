import { useRef, useState } from 'react';

function RefPrac() {
    const [post, setPost] = useState([]);
    const [writer, setWriter] = useState('');
    const [title, setTitle] = useState('');
    const [searchOpt, setSearchOpt] = useState('title');
    const [searchKey, setSearchKey] = useState('');
    const [res, setRes] = useState([]);

    const writerRef = useRef();
    const titleRef = useRef();

    const insertPost = (e) => {
        e.preventDefault();
        if (writer.length === 0) {
            writerRef.current.focus();
            return;
        } else if (title.length === 0) {
            titleRef.current.focus();
            return;
        } else {
            // const newPost = post.concat({ id: post.length === 0 ? 1 : post.length + 1, writer: writer, title: title });
            // setPost(newPost);
            let newPost = { id: post.length === 0 ? 1 : post.length + 1, writer: writer, title: title };
            setPost([...post, newPost]);
            if (searchKey.trim()) {
                const result = newPost.filter((post) => {
                    if (searchOpt === 'title') {
                        return post.title.includes(searchKey);
                    } else if (searchOpt === 'writer') {
                        return post.writer.includes(searchKey);
                    }
                    return false;
                });
                setRes(result);
            } else setRes(newPost);
            setWriter('');
            setTitle('');
        }
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

    return (
        <div>
            <div>
                <form onSubmit={insertPost}>
                    <fieldset>
                        <div>
                            <label htmlFor="writer">작성자: </label>
                            <input
                                type="text"
                                value={writer}
                                ref={writerRef}
                                onChange={(e) => {
                                    setWriter(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="title">제목: </label>
                            <input
                                type="text"
                                ref={titleRef}
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <input type="submit" value="작성" onClick={insertPost} />
                        </div>
                    </fieldset>
                </form>
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

function RefPrac2() {
    const [text, setText] = useState('');
    const [color, setColor] = useState('white');
    const inputRef = useRef();
    const changeBgColor = () => {
        setColor(text);
        setText('');
        inputRef.current.focus();
    };
    return (
        <div style={{ backgroundColor: color }}>
            <div>
                <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div>
                <input type="button" value="색 적용" onClick={changeBgColor} />
            </div>
        </div>
    );
}
export { RefPrac, RefPrac2 };
