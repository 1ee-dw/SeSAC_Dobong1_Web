import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function Student({ students }) {
    const [queryParams, setQueryParams] = useSearchParams();
    const real = queryParams.get('name');
    const nav = useNavigate();
    const { name } = useParams();
    return (
        <div className="student">
            <h2>학생페이지</h2>
            <p>
                학생 이름은 <strong>{name}</strong> 입니다.
            </p>
            {name === 'new' && (
                <p>
                    학생의 이름은 <span>{real}</span> 입니다.
                </p>
            )}
            <input type="button" value="이전 페이지로" onClick={() => nav(-1)} />
        </div>
    );
}
