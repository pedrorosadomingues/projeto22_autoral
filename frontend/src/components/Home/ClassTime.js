import { useState, useContext } from 'react'
import { HomeContext } from '@/contexts/HomeContext'
import { w } from 'windstitch'
import { setAbsolute, deleteStudentById} from "@/utils";

export default function ClassTime({ time, id, students }) {
    const { showRegisterStudentModal, handleEffect, setHandleEffect } = useContext(HomeContext)
    const attPage = () => setHandleEffect(!handleEffect)

    const filteredStudents = students.filter((student) => student.classTimeId === id)
    return (
        <ClassTimeCtn>
            <ClassTimeStl className={setAbsolute(showRegisterStudentModal)}>{time}</ClassTimeStl>
            {filteredStudents.map((student) => (
                <div key={student.id} className='flex' >
                    <StdName >{student.name} </StdName>
                    <CloseBtn onClick={ () => deleteStudentById(student.id, attPage)}>X</CloseBtn>
                </div>
            ))}
        </ClassTimeCtn>
    )
}

const ClassTimeCtn = w.div`
flex  flex-col w-full h-screen items-center justify-center bg-gray-200 w-1/6 border-2 border-black`;

const ClassTimeStl = w.h1`
 right-[85%] text-red-900 font-black bg-blue-200 `;

const CloseBtn = w.span`
  text-red-900 font-black cursor-pointer text-[12px] hover:text-[13px] transition duration-300 p-1 flex items-center ml-1  border-2 border-red-900 mt-1 rounded`;

const StdName = w.h1`
text-red-900 font-black cursor-pointer text-[12px] border-2 border-black mt-1 rounded p-1`;