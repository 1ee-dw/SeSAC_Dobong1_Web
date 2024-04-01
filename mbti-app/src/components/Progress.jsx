import styled from 'styled-components';

const ProgressCntr = styled.div`
    margin-top: 3rem;
`;

const Fill = styled.div`
    background-color: #777;
    width: 100%;
    height: 10px;
`;
const Guage = styled.div`
    background-color: skyblue;
    height: 100%;
    width: ${(props) => props.per}%;
    transition: 0.4s;
`;
function Progress({ page, totalPage }) {
    return (
        <ProgressCntr>
            <div>
                {page} / {totalPage}
            </div>
            <Fill>
                <Guage per={(page / totalPage) * 100}></Guage>
            </Fill>
        </ProgressCntr>
    );
}

export default Progress;
