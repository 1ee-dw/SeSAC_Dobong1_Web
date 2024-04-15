import Prac1 from './components/Prac1';
import Start from './components/Start';

function App() {
    return (
        <div className="App">
            <Start />
            {/* 방법 1. component 내에 직접 socket과 initialSocketConnect 선언. */}
            <Prac1 />
        </div>
    );
}

export default App;
