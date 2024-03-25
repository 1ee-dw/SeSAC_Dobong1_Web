import '../styles/SassComponent.scss';
import sesac from '../assets/main.png';

export default function Sass() {
    return (
        <>
            <h4>Sass 사용.</h4>
            <div className="div1">
                <div className="div2">
                    <div className="div3"></div>
                </div>
                <button className="btn orangered">BTN1</button>
                <button className="btn btn--opacity">BTN2</button>
                <button className="btn btn--blue">BTN3</button>
            </div>
            <div className="container">
                <div className="box1"></div>
                <div className="box1"></div>
                <div className="box1"></div>
                <p className="circle"></p>
                <p className="circle"></p>
                <p className="circle"></p>
                <div className="box2">hi1</div>
                <div className="box2">hi2</div>
                <div className="box2">hi3</div>
                <div className="box2">hi4</div>
            </div>
            <h2>이미지 가져오기</h2>
            <h4>1. src 내부 폴더에 저장</h4>
            <h5>상대 경로를 통해 불러오기</h5>
            <img src="../assets/main.png" alt="src 내부에 이미지가 없을 때엔 경로명으로 접근할 수 없음" />
            <h5>이미지 import 해서 가져오기</h5>
            <img src={sesac} alt="import를 통해 가져오기기" />
            <h5>css 파일에서 이미지 접근</h5>
            <div className="img-test src-img"></div>

            <h4>2. public 폴더에 저장</h4>
            <h5>img태그 사용</h5>
            <img src="/assets/main.png" alt="경로명으로 접근 가능, public 폴더는 static이기 때문에 / 로 접근" />
            <img src="" alt="경로명으로 접근 가능, public 폴더는 static이기 때문에 / 로 접근" />
            <h5>css 파일에서 이미지 접근</h5>
            <div className="img-test public-img"></div>

            <h1>사진 넣기 실습</h1>
            <div className="practice">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    );
}
