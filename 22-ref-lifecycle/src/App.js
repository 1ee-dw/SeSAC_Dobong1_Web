// import { RefFunc1, RefFunc2 } from './components/RefFunc';
// import LifeCycleFunc from './components/LifeCycleFunc';
// import Container from './components/Container';
// import { PostList, PostList2, PostList3 } from './components/PostList';

import MapPrac from './components/prac/MapPrac';
import MapPrac2 from './components/prac/MapPrac2';
import { RefPrac, RefPrac2 } from './components/prac/RefPrac';

function App() {
    return (
        <div className="App">
            <h1>map 과제 1</h1>
            <MapPrac />
            <h1>map 과제 2</h1>
            <MapPrac2 />
            <h1>ref 과제</h1>
            <RefPrac />
            <RefPrac2 />

            {/* <RefFunc1 />
            <RefFunc2 />
            <h1>life cycle</h1>
            <LifeCycleFunc />
            <h1>실습1</h1>
            <PostList />
            <h1>실습 2</h1>
            <PostList2 />
            <Container>
                <PostList3 />
            </Container> */}
        </div>
    );
}

export default App;
