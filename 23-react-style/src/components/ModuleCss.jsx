import classNames from 'classnames';
import Names from 'classnames/bind';
import style1 from '../styles/style.module.css';
export default function ModuleCss() {
    const setting = Names.bind(style1);
    const isTrue = true;
    const value = 'first';
    return (
        <div className={style1.container}>
            <h4>.module.css 적용</h4>
            <div className={style1.box2}>
                <div>안녕하세용</div>
            </div>
            <div className={`${style1.first} ${style1.second}`}>클래스 여러개 지정1(백틱 사용)</div>
            <div className={[style1.first, style1.second].join(' ')}>클래스 여러개 지정2(join 함수 사용)</div>
            <div className={classNames(style1.first, style1.second)}>클래스 여러개 지정2(classnames 메소드 이용 - install 필요)</div>
            <div className={setting('first', 'second')}>classNames 모듈 사용 1</div>
            <div className={setting('first', { second: true })}>classNames 모듈 사용 2</div>
            <div className={setting(value, { second: isTrue })}>classNames 모듈 사용 2</div>
        </div>
    );
}
