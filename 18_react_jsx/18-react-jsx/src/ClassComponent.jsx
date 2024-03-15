import { Component } from 'react';

export default class ClassComponent extends Component {
    render() {
        const name = 'ldw';
        return (
            <div style={{ border: '1px solid greenyellow', backgroundColor: 'pink' }}>
                <div>안녕하세요.</div>
                <div>클래스 컴포넌트 입니다.</div>
                <span>제 이름은 {name}입니다.</span>
            </div>
        );
    }
}
