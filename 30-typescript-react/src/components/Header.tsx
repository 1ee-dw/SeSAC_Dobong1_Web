import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HEADER = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ccc;
`;
const LOGO = styled.h1`
    padding: 0 24px;
`;
const NAV = styled.div`
    width: 240px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
function HeaderNav() {
    return (
        <HEADER>
            <LOGO>Hello, typescript</LOGO>
            <NAV>
                <Link to={'/'}>홈으로</Link>
                <Link to={'/lecture'}>강의 내용</Link>
                <Link to={'/practice'}>실습</Link>
            </NAV>
        </HEADER>
    );
}

export default HeaderNav;
