import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Main from './pages/Main';
import Student from './pages/Student';
import NotFound from './pages/NotFound';

const students = [
    {
        id: 1,
        name: 'allie',
    },
    {
        id: 2,
        name: 'codingon',
    },
    {
        id: 3,
        name: 'jisoo',
    },
];
console.log('app.students', students);
function App() {
    return (
        <div className="App">
            <Header students={students} />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/student/:name" element={<Student students={students} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
