import { useSearchParams } from 'react-router-dom';

function Main() {
    const [mode, setMode] = useSearchParams();
    if (mode.get('mode') === 'dark') {
        const main = document.querySelector('.main');
        main.classList.add(mode.get('mode'));
    }
    return (
        <main className="main">
            <h2>Main Page</h2>
            <input type="button" value="다크 모드" onClick={() => setMode({ mode: 'dark' })} />
        </main>
    );
}

export { Main };
