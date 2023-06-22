import api from '../config/server';
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import AddStudentModal from '../components/Home/AddStudentBtn';
import { HomeContext } from '@/contexts/HomeContext';
import TableWeek from '@/components/Home/TableWeek';
import { w } from 'windstitch';
import RegisterStudentModal from '@/components/Home/RegisterStudentModal';
import ModalYesOrNo from '@/components/Home/YesOrNoModal';
import UpdateStudentModal from '@/components/Home/UpdateStudentModal';


export default function Home() {
    const [students, setStudents] = useState([])
    const [userName, setUserName] = useState('')
    const [stdState, setStdState] = useState({
        name: '',
    })
    const [showModal, setShowModal] = useState({
        registerStd: false,
        yesOrNo: false,
        updateStd: false,
    })
    const [handleEffect, setHandleEffect] = useState(false)

    async function getStudentsByUserId(Auth) {
        try {
            const { data } = await api.get(`/student`, Auth)
            setStudents(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) window.location.href = '/'
        const Auth = { headers: { Authorization: `Bearer ${token}` } };
        const userName = localStorage.getItem('user')
        setUserName(userName)
        getStudentsByUserId(Auth)
        
    }, [showModal, handleEffect])

    return (
        <HomeContext.Provider value={{
            students,
            showModal,
            setShowModal,
            handleEffect,
            setHandleEffect,
            stdState,
            setStdState
        }} >

            <HomeCtn >

                <h1> Hey, {userName} </h1>

                <Title>ClassPerformance</Title>
                <AddStudentModal />
                <RegisterStudentModal />
                <UpdateStudentModal />
                <TableWeek />
                <ModalYesOrNo />
            </HomeCtn>

        </HomeContext.Provider>
    )
}


const HomeCtn = w.main`
flex w-full h-[100%] items-center  column flex-col bg-gray-200 justify-start`;

const Title = w.h1`
text-4xl font-bold text-center text-green-800 p-10 mb-10`;
