import { levels } from "@/utils"
import { w } from "windstitch";
import { useContext, useState } from 'react'
import { HomeContext } from '@/contexts/HomeContext'

export default function LevelButtons({ handleChange }) {
    const { form, setForm } = useContext(HomeContext)

    return (
        <>
            <h1>Level</h1>
            <LevelBtnCtn>
                {levels.map((level) => (
                    <LevelButtonsStl key={level.id}  >
                        <input className={"cursor-pointer"} onClick={(e) => handleChange(e)} type="radio" name="nivelId" value={level.id} />
                        <label className={"cursor-pointer"} >{level.level}</label>
                    </LevelButtonsStl>
                ))}
            </LevelBtnCtn>
        </>
    )
}

const LevelBtnCtn = w.div`
flex items-center justify-center bg-gray-200 w-1/6 h-1/6 gap-4 m-auto`;

const LevelButtonsStl = w.div`
 flex items-center justify-center `;