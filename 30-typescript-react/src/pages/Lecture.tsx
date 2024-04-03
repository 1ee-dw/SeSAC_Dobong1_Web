import Container from '../components/lecture/Conatiner';
import EventObj from '../components/lecture/EvnentObj';
import GenericList from '../components/lecture/GenericList';
import { Props1, Props2, Props3 } from '../components/lecture/Props';
import Text from '../components/lecture/Text';
import TodoList from '../components/lecture/TodoList';

function Lecture() {
    return (
        <>
            <Container>
                <h2>강의 내용</h2>
                <Props1 name="ldw" />
                <Props2 width="100px" height="100px" color="pink" />
                <Props3 width={100} height={100} color="green" text="Hello" />
                <Text />
                <EventObj />
                <TodoList />
                <GenericList />
            </Container>
        </>
    );
}

export default Lecture;
