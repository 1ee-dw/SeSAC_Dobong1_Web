import { useState } from 'react';

export default function useToggle(initialValue = false) {
    const [val, setVal] = useState(initialValue);
    const toggleVal = () => setVal(!val);
    return [val, toggleVal];
}
