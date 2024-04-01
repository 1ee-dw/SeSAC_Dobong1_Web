import styled from 'styled-components';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { next } from '../store/module/mbti';
const Header = styled.h1`
    font-size: 3rem;
`;
const MainImg = styled.img`
    width: inherit;
`;
const SubHeader = styled.h2`
    font-size: 1.5rem;
    color: #777;
`;
function Start() {
    const dispatch = useDispatch();

    return (
        <>
            <Header>개발자 mbti 조사</Header>
            <MainImg src={process.env.PUBLIC_URL + '/assets/main.jpg'} alt="main image" />
            <SubHeader>개발자가 흔히 접하는 상황에 따라서 MBTI 를 알아 봅시다! </SubHeader>
            <Button text="테스트 시작" clickEvent={() => dispatch(next())} mainColor={'yellow'} hoverColor={'gold'} subColor={'orange'} />
        </>
    );
}

export default Start;
