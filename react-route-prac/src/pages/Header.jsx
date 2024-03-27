import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/common.scss';
const MyLink = styled(Link)`
    text-decoration: none;
    color: blue;
    font-size: 32px;
    padding: 10px 30px;
`;
export default function Header({ students }) {
    return (
        <header className="header">
            <div className="nav">
                <MyLink to="/">Home</MyLink>
                <MyLink to="/student/allie">학생</MyLink>
                <MyLink to="/student/codingon">코딩온</MyLink>
                <MyLink to="/student/new?name=jisoo">query</MyLink>
                {/* {students.map((student) => {
                    return <MyLink to={`/student/${student.name}`}>std{student.id}</MyLink>;
                })} */}
            </div>
        </header>
    );
}
