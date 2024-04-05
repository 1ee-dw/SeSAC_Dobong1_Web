import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
    imgSrc: string;
    title: string;
    desc: string;
}
const CardDiv = styled.div`
    width: 240px;
    background-color: whitesmoke;
    height: 300px;
    margin: 1rem;
    box-shadow: 0 0 10px #aaaa;
    border-radius: 10px;
    text-align: center;
    padding: 0 0.5rem;
    cursor: pointer;
`;
interface divProps {
    src: string;
}
const ImgDiv = styled.div<divProps>`
    width: 80%;
    height: 150px;
    border: 1px solid black;
    margin: 1rem auto;
    background-color: url(${(props: divProps) => props.src});
`;
const DescP = styled.div``;
export default function Card({ imgSrc, title, desc }: Props) {
    const nav = useNavigate();

    return (
        <CardDiv
            onClick={() => {
                nav(`${title}`);
            }}
        >
            <ImgDiv src={imgSrc}>imgSrc</ImgDiv>
            <h3>{title}</h3>
            <DescP>{desc}</DescP>
        </CardDiv>
    );
}
