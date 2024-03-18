import './App.css';
// import { FunctionProps, FunctionProps2 } from './FunctionProps';
// import { Food } from './Food.jsx';
// import { Book } from './Book.jsx';
// import { Btn } from './Btn.jsx';
// import { FunctionState, FunctionState2, FunctionState3, FunctionState4 } from './components/FunctionState';
import { FunctionState, FunctionState2 } from './components/FunctionState';
import PororoObj from './components/PororoObj';

function App() {
    return (
        <div className="App">
            {/* <h1>Hello, props</h1>
            <FunctionProps name="사과" number={5} price={1000} />
            <FunctionProps2 price={50000} />
            <FunctionProps2 price={10000} name="딸기">
                이 안쪽이 children props
                <section style={{ backgroundColor: 'yellow' }}>
                    <article>1</article>
                    <article>2</article>
                    <article>3</article>
                </section>
            </FunctionProps2>
            <Food />
            <Book />
            <Btn text="App 컴포넌트에서 넘겨준 text props 입니다." valid={() => console.log('콘솔 띄우기 성공!')} /> */}
            {/* <h1> hello, state </h1>
            <FunctionState />
            <FunctionState2 />
            <FunctionState3 />
            <FunctionState4 /> */}
            <FunctionState />
            <FunctionState2 />
            <PororoObj />
        </div>
    );
}

export default App;
