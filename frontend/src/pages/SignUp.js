import Link from 'next/link';
import { useState } from 'react';
import api from '../config/server';
import { w } from "windstitch";

export default function SignUp() {
    const [form, setForm] = useState({ name: '', email: '', password: '' })
    function handleChange(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await api.post('/user/sign-up', form)
            alert('Cadastrado com sucesso')
            window.location.href = '/'
        } catch (error) {
            console.log(error.response.data.message)
            alert(error.response.data.message)
        }
    }
    return (
        <SignUpCtn
        >
            <Title>ClassPerformance</Title>
            <Form onSubmit={handleSubmit} >
                <Label>Name</Label>
                <Input onChange={handleChange}
                    name="name"
                    type="text"
                    value={form.name} />
                <Label>Email</Label>
                <Input onChange={handleChange}
                    name="email"
                    type="email"
                    value={form.email} />
                <Label>Password</Label>
                <Input onChange={handleChange}
                    name="password"
                    type="password"
                    value={form.password} />
                <Button type="submit">Sign-up</Button>
                <P>Already have an account?<LinkStl href="/">Sign-in page</LinkStl></P>
            </Form>
        </SignUpCtn>
    )
}

const Input = w.input`
  border border-gray-400 p-2 mb-4`;

const Label = w.label`
  text-left`;

const SignUpCtn = w.main`
flex w-full h-screen items-center justify-center column flex-col`;

const Title = w.h1`
  text-red-900 font-black`;

const Button = w.button`
bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`;

const P = w.p`
text-center mt-4`;

const LinkStl = w.a`
text-blue-500 hover:text-blue-700 text-left`;

const Form = w.form`
flex flex-col w-1/3`;