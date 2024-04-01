import { useSelector } from 'react-redux';
import SkyblueButton from '../components/SkyblueButton';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { check, next } from '../store/module/mbti';
import Progress from '../components/Progress';
const Q = styled.p`
    font-size: 1.5rem;
    color: #777;
`;
const VS = styled.p`
    font-size: 2rem;
    padding-top: 1.5rem;
`;
function Mbti() {
    const survey = useSelector((state) => state.mbti.survey);
    console.log(survey);
    const page = useSelector((state) => state.mbti.page);
    const dispatch = useDispatch();
    return (
        <>
            <Q>{survey[page - 1].question}</Q>
            <ul>
                {survey[page - 1].answer.map((item, idx) => {
                    return (
                        <>
                            <li key={idx}>
                                <SkyblueButton
                                    text={item.text}
                                    clickEvent={() => {
                                        // dispatch(next());  ==> 아래 {type:'mbti/NEXT'} 와 같음.
                                        dispatch({ type: 'mbti/NEXT' });
                                        dispatch(check(item.result));
                                    }}
                                />
                            </li>
                            {idx === 0 && <VS>VS</VS>}
                        </>
                    );
                })}
            </ul>
            <Progress page={page} totalPage={survey.length} />
        </>
    );
}

export { Mbti };
