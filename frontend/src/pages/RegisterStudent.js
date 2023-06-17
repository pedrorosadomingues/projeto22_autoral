import { useState } from "react";
import api from "../config/server";
import { w } from "windstitch";
import jwt from 'jsonwebtoken';

const token = window.localStorage.getItem('token')
const Auth = { headers: { Authorization: `Bearer ${token}` } };

export default function RegisterStudent() {
    const [form, setForm] = useState({ name: '', age: 0, nivelId: 0, classTimeId: 0, cpf: '' })
    function handleChange(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
        console.log(form)
    }
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await api.post(`/student/`, form, Auth)
            alert('Cadastrado com sucesso')
            window.location.href = '/'
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }
    return (
        <SignInCtn>
            <Title>Cadastro de Aluno</Title>
            <Form onSubmit={handleSubmit} >
                <Label>Nome</Label>
                <Input onChange={handleChange}
                    name="name"
                    type="text"
                    value={form.name} />
                <Label>Idade</Label>
                <Input onChange={handleChange}
                    name="age"
                    type="number"
                    value={form.age} />
                <Label>CPF</Label>
                <Input onChange={handleChange}
                    name="cpf"
                    type="text"
                    value={form.cpf} />
                <Label>Nível</Label>
                <Input onChange={handleChange}
                    name="nivelId"
                    type="number"
                    value={form.nivelId} />
                <Label>Horário</Label>
                <Input onChange={handleChange}
                    name="classTimeId"
                    type="number"
                    value={form.classTimeId} />
                <Button type="submit">Cadastrar</Button>
            </Form>
        </SignInCtn>
    )
}

const Input = w.input`
  border border-gray-400 p-2 mb-4`;

const Label = w.label`
  text-left`;

const SignInCtn = w.main`
flex w-full h-screen items-center justify-center column flex-col`;

const Title = w.h1`
  text-red-900 font-black`;

const Form = w.form`
  flex flex-col w-1/3`;

const Button = w.button`
  bg-green-500 text-white font-bold py-2 px-4 rounded`;