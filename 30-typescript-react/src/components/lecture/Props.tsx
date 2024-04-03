interface Props1 {
    name: string;
}

function Props1({ name }: Props1) {
    return <>hello, {name}</>;
}

interface Props2 {
    width: string;
    height: string;
    color: string;
    // [key: string]: string -> 키가 어떤 것이 올 지 모르는 경우에만 사용, 최대한 사용하지 않는 것이 좋음
}

function Props2(props: Props2) {
    const divStyle = {
        width: props.width,
        height: props.height,
        backgroundColor: props.color,
    };

    return <div style={divStyle}></div>;
}

interface Props3 {
    width: number;
    height: number;
    color: string;
    text: string;
}

const Props3 = (props: Props3) => {
    const { width, height, color, text } = props;
    const divStyle: object = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color ? color : 'gray',
        textAlign: 'center',
        lineHeight: `${height}px`,
    };
    return <div style={divStyle}>{text}</div>;
};

export { Props1, Props2, Props3 };
