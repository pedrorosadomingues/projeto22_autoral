import { w } from 'windstitch';
import { useEffect, useState } from 'react';

export default function StudentPage() {
    const [localStdState, setLocalStdState] = useState({});
    useEffect(() => {
        const localStudent = JSON.parse(localStorage.getItem('localStudent'));
        setLocalStdState(localStudent);
    }, []);



    return (
        <div>
            <h1>Student Page</h1>
            <p>Student: {localStdState.name}</p>
        </div>
    );
}