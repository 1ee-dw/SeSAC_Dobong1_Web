function SyntheticEvent() {
    function printInputValue(e) {
        console.log(e.target.value);
    }
    function syntheticEvent(e) {
        console.log(e);
    }
    return (
        <div>
            <input type="text" placeholder="입력" onChange={printInputValue} />
            <button onClick={syntheticEvent}>클릭 이벤트 콘솔 출력</button>
        </div>
    );
}

export default SyntheticEvent;
