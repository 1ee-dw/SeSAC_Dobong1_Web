import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './styles/Common.scss';

import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';
import Header from './pages/Header';
import ProductPage from './pages/ProductPage';

import ProductDetailPage from './pages/ProductDetailPage';
import PhotoPage from './pages/PhotoPage';

function App() {
    const [products, setProducts] = useState([]);
    const [photos, setPhotos] = useState([]);
    const tempProductsData = [
        {
            id: 1,
            name: '다이슨 슈퍼소닉',
            email: 'Eliseo@gardner.biz',
            body: '다이슨 슈퍼소닉 헤어드라이어를 위한 자석 부착형 스타일링 노즐, 스탠드 및 스타일링 액세서리.',
        },
        {
            id: 2,
            name: 'SSD 1TB',
            email: 'Jayne_Kuhic@sydney.com',
            body: '삼성전자 삼성 외장SSD T7 1TB 외장하드 1테라 USB3.2 Gen.2 Type-C MU-PC1T0 공식인증 (정품)',
        },
    ];
    console.log(tempProductsData);
    const getProducts = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
        console.log(res.data[0]);
        setProducts(res.data.slice(0, 10));
    };
    const getPhotos = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setPhotos(res.data.slice(0, 10));
    };
    useEffect(() => {
        getProducts();
        getPhotos();
    }, []);
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/products" element={<ProductPage products={products} />} />
                <Route path="/products/:id" element={<ProductDetailPage products={products} />} />
                <Route path="/photos" element={<PhotoPage items={photos} />} />
                {/* <Route path="/products/:id" element={<ProductDetailPage products={products} />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
