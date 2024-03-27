import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
    return (
        <Link to={`/products/${product.id}`}>
            <ul className="ProductItem">
                <li>상품명: {product.name} </li>
                <li>상세설명: {product.body} </li>
            </ul>
        </Link>
    );
}
