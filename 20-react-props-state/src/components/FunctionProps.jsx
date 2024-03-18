export function FunctionProps({ name, number, price }) {
    return (
        <div>
            <h5>{name}</h5>
            <p>
                {number}개에{price}원
            </p>
        </div>
    );
}

export function FunctionProps2(props) {
    return (
        <div>
            <h5>{props.name}</h5>
            <p>
                {props.number}개에 {props.price}원
            </p>
            <div>{props.children}</div>
        </div>
    );
}

FunctionProps2.defaultProps = {
    number: 3,
    name: '샤인머스켓',
};
