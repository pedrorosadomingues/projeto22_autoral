import { useState, useContext } from 'react'
import { HomeContext } from '@/contexts/HomeContext'
import { w } from 'windstitch'


export default function ClassTime({ time, id , students}) {
    const filteredStudents = students.filter((student) => student.classTimeId === id )   
    return (
        <ClassTimeCtn>
        <ClassTimeStl>{time}</ClassTimeStl>
            {filteredStudents.map((student) => (
                <div key={student.id} className='flex flex-col' >
                    <h1 className="text-red-900 font-black">{student.name}</h1>
                </div>
            ))}
        </ClassTimeCtn>
    )
}

const ClassTimeCtn = w.div`
flex  flex-col w-full h-screen items-center justify-center bg-gray-200 w-1/6 h-1/6 border-2 border-black`;

const ClassTimeStl = w.h1`
absolute left-[-120px] text-red-900 font-black bg-blue-200 `;