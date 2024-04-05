import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Lecture from './pages/Lecture';
import HeaderNav from './components/Header';
import Practice from './pages/Practice';
import Matjyp from './pages/Matjyp';
import Detail from './pages/Detail';

function App() {
    return (
        <div className="App">
            <HeaderNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lecture" element={<Lecture />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/lecture/matjyp" element={<Matjyp />} />
                <Route path="/lecture/matjyp/:title" element={<Detail />} />
            </Routes>
        </div>
    );
}

export default App;
