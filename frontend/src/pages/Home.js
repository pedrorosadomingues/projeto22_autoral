import api from '../config/server';
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import AddStudentModal from '../components/AddStudentModal';



export default function Home() {
    const [students, setStudents] = useState([])
    const [haveStudent, setHaveStudent] = useState(false)

    async function getStudentsByUserId(id, Auth) {
        try {
            const { data } = await api.get(`/student/${id}`, Auth)
            setStudents(data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if (!token) window.location.href = '/'
        const Auth = { headers: { Authorization: `Bearer ${token}` } };
        const  id  = jwt.decode(token).id
        getStudentsByUserId(id, Auth)
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
            {haveStudent && (<AddStudentModal />)}
        </main>
    )
}