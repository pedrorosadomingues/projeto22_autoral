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
                setStdState(student)
                window.location.href = '/StudentPage'
            }} >{student.name} </StdName>
            <EditStdButton className={
                showModal.registerStd  || showModal.updateStd && 'hidden'
            } onClick={() => {
                setShowModal({
                    ...showModal,
                    updateStd: !showModal.updateStd,
                    student: student
                })
            }}><ion-icon name="create" ></ion-icon>
            </EditStdButton>
            <CloseBtn className={
                showModal.registerStd  || showModal.updateStd && 'hidden'
            } onClick={() => {
                setShowModal({
                    ...showModal,
                    yesOrNo: !showModal.yesOrNo,
                    studentName: student.name,
                    studentId: student.id
                })
            }}><ion-icon name="trash"></ion-icon>
            </CloseBtn>
        </div >
    );
};

const StdName = w.h1`
text-black-900 font-black cursor-pointer w-full max-w-[130px] text-[14px]  mt-1 rounded transition duration-300 hover:text-[15px] truncate`;

const CloseBtn = w.span`
text-red-900 font-black cursor-pointer text-[18px] hover:text-[20px] transition duration-300 hover:bg-red-900 hover:text-white flex items-center rounded`;

const EditStdButton = w.span`
  text-green-900 font-black cursor-pointer text-[18px] hover:text-[20px] transition duration-300 hover:bg-green-900 hover:text-white flex items-center rounded ml-1`;