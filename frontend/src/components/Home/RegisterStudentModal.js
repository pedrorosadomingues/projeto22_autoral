import { useState, useContext } from "react";
import { HomeContext } from "../../contexts/HomeContext";
import api from "../../config/server";
import { w } from "windstitch";
import jwt from 'jsonwebtoken';
import { classTimes, weekdays, levels  } from "@/utils";
import LevelButtons from "../Form/LevelButtons";

export default function RegisterStudent() {
    const [form, setForm] = useState({ name: '', age: 0, nivelId: 0, classTimeId: 0, cpf: '' })
    const { showRegisterStudentModal, setShowRegisterStudentModal } = useContext(HomeContext)
    const token = localStorage.getItem('token')
    const Auth = { headers: { Authorization: `Bearer ${token}` } };

    function handleChange(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    async function handleSubmit(e) {
        e.preventDefault()     
        try {
            await api.post(`/student`, form, Auth)
            alert('Cadastrado com sucesso')
            setShowRegisterStudentModal(!showRegisterStudentModal)        
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }
    return (
        <RegisterStdModal>
            <RegisterStdCtn>
                <Title>Register Student</Title>
                <CloseBtn onClick={() => setShowRegisterStudentModal(!showRegisterStudentModal)}>X</CloseBtn>
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
                    <LevelButtons handleChange={handleChange}/>
                    <Label>Class Time</Label>
                    <Input onChange={handleChange}
                        name="classTimeId"
                        type="number"
                        value={form.classTimeId} />
                    <Label>Weekday</Label>
                    <Input onChange={handleChange}
                        name="weekdayId"
                        type="number"
                        value={form.weekdayId} />
                    <Button type="submit">Cadastrar</Button>
                </Form>
            </RegisterStdCtn>
        </RegisterStdModal>
    )
}

const Input = w.input`
  border border-gray-400 p-2 mb-2`;

const Label = w.label`
  text-left`;

const RegisterStdModal = w.main`
absolute z-3 top-0 flex w-full h-screen items-center justify-center column flex-col bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-lg`;

const RegisterStdCtn = w.main`
flex w-1/3 items-center justify-center flex-col border-2 border-black border-opacity-50 p-4 rounded-lg shadow-lg bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-lg`;
const Title = w.h1`
  text-green-900 font-black text-2xl `;

const Form = w.form`
  flex flex-col w-1/3`;

const Button = w.button`
  bg-green-500 text-white font-bold py-2 px-4 rounded`;

const CloseBtn = w.button`
  absolute top-2 right-2 bg-red-500 text-white font-bold py-2 px-4 rounded`;