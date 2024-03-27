import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <h1>Page Not Found</h1>
            <Link to="/"> 홈으로 이동 </Link>
        </>
    );
}

export { NotFound };
