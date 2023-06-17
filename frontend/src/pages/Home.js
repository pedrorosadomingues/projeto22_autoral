import api from '../config/server';
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import AddStudentModal from '../components/Home/AddStudentModal';

export default function Home() {
    const [students, setStudents] = useState([])

    async function getStudentsByUserId(Auth) {
        try {
            const { data } = await api.get(`/student`, Auth)
            setStudents(data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (!token) window.location.href = '/'
        const Auth = { headers: { Authorization: `Bearer ${token}` } };
        getStudentsByUserId(Auth)
        console.log("array", students)
        if (students.length === 0) {
            setHaveStudent(false)
        } else {
            setHaveStudent(true)
        }
    }, [])

    useEffect(() => {
        if (students.length === 0) {
          setHaveStudent(false)
        } else {
          setHaveStudent(true)
        }
      }, [students])
      
    async function getStudents() { }

    return (
        <main className="flex w-full h-screen items-center justify-center column flex-col"
        >
            {!haveStudent && (<AddStudentModal />)}
            {haveStudent && null}
        </main>
    )
}