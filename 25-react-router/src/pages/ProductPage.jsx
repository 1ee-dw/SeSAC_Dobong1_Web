import ProductList from '../components/ProductList';

function ProductPage({ products }) {
    console.log(products);
    console.log(products[0]);
    return (
        <main className="product-page">
            <p>상품 목록</p>
            <ProductList products={products} />
        </main>
    );
}

export default ProductPage;
