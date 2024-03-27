import { useNavigate, useParams } from 'react-router-dom';

function ProductDetailPage({ products }) {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(id);
    const [product] = products.filter((item) => item.id === Number(id));
    console.log(product); // postid id name email body
    if (!product) {
        return <main>존재하지 않는 상품입니다.</main>;
    }
    return (
        <main>
            <h3>제품 상세</h3>
            <input type="button" value="뒤로가기" onClick={() => navigate(-1)} />
            <input type="button" value="홈으로" onClick={() => navigate('/')} />
            <ul>
                <li>판매번호: {product.id}</li>
                <li>상품명: {product.name}</li>
                <li>판매자: {product.email}</li>
                <li>상세설명: {product.body}</li>
            </ul>
        </main>
    );
}

export default ProductDetailPage;
