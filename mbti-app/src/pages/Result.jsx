import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PinkButton from '../components/PinkButton';
import { reset } from '../store/module/mbti';
import { useDispatch } from 'react-redux';

const Head = styled.header`
    font-size: 3rem;
`;
const Res = styled.p`
    font-size: 1.5rem;
`;
const Exp = styled.p``;
const Add = styled.p``;
const AddImg = styled.img`
    width: 500px;
    transform: translateX(-35px);
`;
function Result() {
    const dispatch = useDispatch();
    const result = useSelector((state) => state.mbti.mbtiResult);
    const exp = useSelector((state) => state.mbti.explanations[result]);
    return (
        <>
            <Head>당신의 MBTI 결과는</Head>
            <Exp>{exp.text}</Exp>
            <Res>{result}</Res>
            <Add>이건 재미로 읽어보세요!</Add>
            <AddImg src={`${process.env.PUBLIC_URL}${exp.img}`} alt={`${result} 설명 이미지`} />
            <PinkButton text={'다시 검사하기'} clickEvent={() => dispatch(reset())} />
        </>
    );
}

export default Result;
