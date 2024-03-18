export function Btn(props) {
    const { text, valid } = props;
    return (
        <div>
            <h1>{text}</h1>
            <button type="button" onClick={valid}>
                콘솔 메시지
            </button>
        </div>
    );
}

Btn.defaultProps = {
    text: '이건 기본 text props 입니다.',
};
