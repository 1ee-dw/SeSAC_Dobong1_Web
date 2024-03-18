export function Book(props) {
    return (
        <div className="container">
            <div className="book_intro">
                <header>
                    <h1 className="best_seller">금주 베스트셀러</h1>
                    <img src="" alt="" />
                    <h2>{props.title}</h2>
                </header>
                <article>
                    <div className="book_info">
                        <span>저자: {props.author}</span>
                        <span>판매가: {props.price}</span>
                        <span>구분: {props.type}</span>
                    </div>
                </article>
            </div>
        </div>
    );
}

Book.defaultProps = {
    title: '신',
    author: '베르나르 베르베르',
    price: '19000',
    type: '해외소설',
};
