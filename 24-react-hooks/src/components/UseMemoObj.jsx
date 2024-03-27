import { useMemo } from 'react';
import { useEffect, useState } from 'react';

export default function UseMemoObj() {
    const [num, setNum] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    // useMemo 사용 전
    const location = {
        country: isKorea ? 'korea' : 'abroad',
    };
    useEffect(() => {
        console.log('location 데이터가 바뀔 때마다 실행됩니다.');
    }, [location]);

    // useMemo 사용 후
    const location2 = useMemo(() => {
        return {
            country: isKorea ? 'korea' : 'abroad',
        };
    });
    return (
        <>
            <h3>useMemo & object</h3>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
            <div>{location.country}</div>
            <div>{location2.country}</div>
            <input type="button" value="나라 바꾸기" onClick={() => setIsKorea(!isKorea)} />
        </>
    );
}
