import { w } from 'windstitch';
import { useContext } from 'react';
import { HomeContext } from '@/contexts/HomeContext';

export default function StudentName({ name, id }) {
    const { setShowModal, showModal } = useContext(HomeContext);
    return (
        <div className='flex' >
            <StdName >{name} </StdName>
            <CloseBtn onClick={() => setShowModal({
                ...showModal,
                yesOrNo: !showModal.yesOrNo,
                studentName: name,
                studentId: id
            })}>X</CloseBtn>
        </div>
    );
};

const StdName = w.h1`
text-red-900 font-black cursor-pointer text-[12px] border-2 border-black mt-1 rounded p-1 transition duration-300 hover:text-[13px]  hover:bg-red-900 hover:text-white`;

const CloseBtn = w.span`
  text-red-900 font-black cursor-pointer text-[12px] hover:text-[13px] transition duration-300 hover:bg-red-900 hover:text-white p-1 flex items-center ml-1  border-2 border-red-900 mt-1 rounded`;