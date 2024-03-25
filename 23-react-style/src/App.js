// import BasicCSS from './components/BasicCSS';
// import ModuleCss from './components/ModuleCss';
// import StyledComponents from './components/StyledComponents';
// function App() {
//     return (
//         <>
//             {/* <h1>react에 style 적용하기</h1>
//             <BasicCSS />
//             <ModuleCss />
//             <StyledComponents /> */}
//         </>
//     );
// }

// export default App;
// import styled, { keyframes } from 'styled-components';
// import logo from './logo.svg';
// const RootDiv = styled.div`
//     text-align: center;
// `;
// const AppHeader = styled.header`
//     background-color: #282c34;
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     font-size: calc(10px + 2vmin);
//     color: white;
// `;
// const AppLogoSpin = keyframes`
//     from {
//         transform: rotate(0deg);
//     } to {
//         transform: rotate(360deg);
//     }
// `;
// const AppLogo = styled.img`
//     height: 40vmin;
//     pointer-events: none;
//     @media (prefers-reduced-motion: no-preference) {
//         animation: ${AppLogoSpin} infinite 20s linear;
//     }
// `;
// const MyA = styled.a`
//     color: #61dafb;
// `;
// function App() {
//     return (
//         <RootDiv>
//             <AppHeader>
//                 <AppLogo src={logo} alt="app" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <MyA href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//                     Learn React
//                 </MyA>
//             </AppHeader>
//         </RootDiv>
//     );
// }
// export default App;

// import Sass from './components/Sass';
import Prac1 from './components/practice/Prac1';
import Prac2 from './components/practice/Prac2';

function App() {
    return (
        <>
            {/* <h4>sass</h4>
            <Sass /> */}
            <Prac1 />
            <Prac2 />
        </>
    );
}

export default App;
