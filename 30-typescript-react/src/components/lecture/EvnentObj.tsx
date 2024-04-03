export default function EventObj() {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e);
        console.log(e.target);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target);
        console.log(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(e.code);
        console.log(e.key);
        console.log(e.keyCode);
    };
    return (
        <div>
            <div onClick={(e) => console.log(e.target)}>onClick1</div>
            <div onClick={handleClick}>onClick2</div>
            <div>
                <span>onChange</span>
                <input type="text" onChange={handleChange} />
            </div>
            <div>
                <span>onKeyDown</span>
                <input type="text" onKeyDown={handleKeyDown} />
            </div>
        </div>
    );
}
