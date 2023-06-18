import { useState, useContext } from 'react'
import { HomeContext } from '@/contexts/HomeContext'


export default function ClassTime() {
    const { students } = useContext(HomeContext)
    return (
        <>
            {students.map((student) => (
                <div className="flex flex-col w-1/6 h-1/6 border-2 border-black">
                    <h1 className="text-red-900 font-black">{student.name}</h1>

                </div>
            ))}
        </>
    )
}