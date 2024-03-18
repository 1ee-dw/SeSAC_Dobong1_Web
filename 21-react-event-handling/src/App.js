import './App.css';
import SyntheticEvent from './components/SyntheticEvent';
import Count from './components/Count';
import HandlerEx from './components/ex/HandlerEx';
import ColorEx from './components/ex/ColorEx';
import VisibleEx from './components/ex/VisibleEx';

function App() {
    return (
        <div className="App">
            <div>
                <h1>합성이벤트</h1>
                <SyntheticEvent />
                <Count />
            </div>
            <div>
                <HandlerEx />
                <ColorEx />
                <VisibleEx />
            </div>
        </div>
    );
}

export default App;
