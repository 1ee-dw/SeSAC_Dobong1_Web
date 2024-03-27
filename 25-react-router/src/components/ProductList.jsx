import ProductItem from './ProductItem';

export default function ProductList({ products }) {
    console.log(products);
    return (
        <section className="product-list">
            {products.map((product) => {
                return <ProductItem key={product.id} product={product} />;
            })}
            {/* 
            {products.map((product) => {
                return <ProductItem key={product.id} product={product} />;
      })}
      */}
        </section>
    );
}
