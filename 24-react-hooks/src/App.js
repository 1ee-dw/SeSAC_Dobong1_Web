import './App.css';
import CustomHook from './components/CustomHook.jsx';
// import UseCallback from './components/UseCallback.jsx';
// import UseCallback2 from './components/UseCallback2.jsx';
// import UseMemo from './components/UseMemo.jsx';
// import UseMemoObj from './components/UseMemoObj.jsx';
import UseReducer from './components/UseReducer.jsx';
import useTitle from './hooks/useTitle.jsx';
import UseForm from './components/UseForm.jsx';
import FormPrac from './components/prac/FormPrac.jsx';

function App() {
    useTitle('React-Hook');
    return (
        <>
            <h1>react hook</h1>
            {/* <UseMemo />
            <UseMemoObj />
            <UseCallback />
            <UseCallback2 /> */}
            {/* <UseReducer />
            <CustomHook />
            <UseForm /> */}
            <FormPrac />
        </>
    );
}

export default App;
