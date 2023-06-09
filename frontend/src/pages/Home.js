import api from '../config/server';
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';


export default function Home() {
    const [students, setStudents] = useState([])
    const [haveStudent, setHaveStudent] = useState(false)
    async function getStudentsByUserId(id) {
        try {
            const { data } = await api.get(`/students/${id}`)
            setStudents(data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if (!token) window.location.href = '/'
        const { id } = jwt.decode(token)
        getStudentsByUserId(id)
        if (students.length === 0) setHaveStudent(false)
        else setHaveStudent(true)
    }, [])
    async function getStudents() { }

    return (
        <main className="flex w-full h-screen items-center justify-center column flex-col"
        >
            {haveStudent ? (<h1>EM breve</h1>)
                : (<h1 className='text-red-900 font-black'>Você não tem nenhum aluno cadastrado</h1>)}


        </main>
    )
}