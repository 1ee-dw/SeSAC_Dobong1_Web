// 함수형 컴포넌트로 진행
export default function PracJSX() {
    const name = '개';
    const animal = '시고르자브종';
    let a = 5,
        b = 4;
    return (
        <div>
            {/* 1번 */}
            <div style={{ border: '3px dashed #6fc274', width: 'fit-content' }}>
                <h2>
                    <span>제 반려동물의 이름은 {name} 입니다.</span>
                    <br />
                    <span>
                        {name}는 {animal} 입니다.
                    </span>
                </h2>
            </div>
            {/* 2번 */}
            <div>{3 + 5 === 8 ? '정답입니다!' : '오답입니다..'}</div>
            {/* 3번 */}
            <div>{a > b && 'a가 b보다 큽니다'}</div>
            {/* 4번 */}
            <div className="container">
                <div className="title">
                    <h1>Hello World</h1>
                </div>
                <main>
                    <span>
                        아이디: <input type="text"></input>
                    </span>
                    <br />
                    <span>
                        비밀번호: <input type="text"></input>
                    </span>
                </main>
            </div>
        </div>
    );
}
