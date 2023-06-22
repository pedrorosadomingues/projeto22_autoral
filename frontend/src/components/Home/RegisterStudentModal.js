import { useState, useContext, useEffect } from "react";
import { HomeContext } from "../../contexts/HomeContext";
import api from "../../config/server";
import { w } from "windstitch";
import LevelButtons from "../Form/LevelButtons";
import ClassTimeButtons from "../Form/ClassTimeButtons";
import WeekdayButtons from "../Form/WeekdayButtons";

export default function RegisterStudent() {
    const [form, setForm] = useState({ name: '', age: 0, nivelId: 0, classTimeId: 0, cpf: '' })
    const { showModal, setShowModal } = useContext(HomeContext)
    const [token, setToken ] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        setToken(token)
    }, [token])
    const Auth = { headers: {} };

    if (token) {
        Auth.headers.Authorization = `Bearer ${token}`;
    }

    function handleChange(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await api.post(`/student`, form, Auth)
            alert('Cadastrado com sucesso')
            setShowModal({ ...showModal, registerStd: !showModal.registerStd })
        } catch (error) {
            console.log(error)
            error.response.data.details ? alert(error.response.data.details) : alert(error.response.data.message)
        }
    }

    return (
        <>
            {
                showModal.registerStd &&
                <RegisterStdModal >
                    <RegisterStdCtn >
                        <Title>Register Student</Title>
                        <CloseBtn onClick={() => setShowModal(!showModal.registerStd)}>X</CloseBtn>
                        <Form onSubmit={handleSubmit} >
                            <Label>Name</Label>
                            <Input onChange={handleChange}
                                name="name"
                                type="text"
                                value={form.name} />
                            <Label>Age</Label>
                            <Input onChange={handleChange}
                                name="age"
                                type="number"
                                value={form.age} />
                            <Label>CPF</Label>
                            <Input onChange={handleChange}
                                name="cpf"
                                type="text"
                                value={form.cpf} />
                            <LevelButtons handleChange={handleChange} />
                            <ClassTimeButtons handleChange={handleChange} />
                            <WeekdayButtons handleChange={handleChange} />
                            <Button type="submit">Register</Button>
                        </Form>
                    </RegisterStdCtn>
                </RegisterStdModal>
            }
        </>
    )

}
const Input = w.input`
  border border-gray-400 p-2 mb-2 h-[25px]`;

const Label = w.label`
  text-left`;

const RegisterStdModal = w.main`
absolute z-3 top-0 flex w-full h-[1200px] pb-[300px] items-center justify-center column flex-col bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-lg`;

const RegisterStdCtn = w.main`
flex w-1/3 items-center justify-center flex-col border-2 border-black border-opacity-50 p-4 rounded-lg shadow-lg bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-lg`;
const Title = w.h1`
  text-green-900 font-black text-2xl `;

const Form = w.form`
  flex flex-col w-1/3`;

const Button = w.button`
  bg-green-500 text-white font-bold py-2 px-4 rounded mt-4`;

const CloseBtn = w.button`
  absolute top-2 right-2 bg-red-500 text-white font-bold py-2 px-4 rounded`;