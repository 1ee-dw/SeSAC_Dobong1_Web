export function Food(props) {
    return (
        <div style={{ color: 'red' }}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    );
}

Food.defaultProps = {
    name: '라면',
    description: 'jmt',
};
