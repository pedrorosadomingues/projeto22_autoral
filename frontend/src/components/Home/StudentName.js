import { w } from 'windstitch';
import { useContext, useEffect } from 'react';
import { HomeContext } from '@/contexts/HomeContext';

export default function StudentName({ student }) {
    const { setShowModal, showModal, stdState, setStdState } = useContext(HomeContext);

    useEffect(() => {
        localStorage.setItem('localStudent', JSON.stringify(student))
    }, []);
    
    return (
        <div className='flex' >
            <StdName onClick={() => {
                console.log('student', student)
                setStdState(student)
                window.location.href = '/StudentPage'
            }} >{student.name} </StdName>
            <CloseBtn onClick={() => {
                setShowModal({
                    ...showModal,
                    yesOrNo: !showModal.yesOrNo,
                    studentName: student.name,
                    studentId: student.id
                })
            }}>X</CloseBtn>
        </div >
    );
};

const StdName = w.h1`
text-red-900 font-black cursor-pointer w-full max-w-[130px] text-[12px] border-2 border-black mt-1 rounded p-1 transition duration-300 hover:text-[13px]  hover:bg-red-900 hover:text-white truncate`;

const CloseBtn = w.span`
  text-red-900 font-black cursor-pointer text-[12px] hover:text-[13px] transition duration-300 hover:bg-red-900 hover:text-white p-1 flex items-center ml-1  border-2 border-red-900 mt-1 rounded`;