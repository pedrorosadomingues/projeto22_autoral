import Joi from "joi";
import { CreateStudentParams } from "@/protocols";

export const createStudentSchema = Joi.object<CreateStudentParams>({
    name: Joi.string().required(),
    age: Joi.number().required(),
    cpf: Joi.string().required(),
    nivelId: Joi.number().required(),
    classTimeId: Joi.number().required(),
    weekdayId: Joi.number().required(),
    
});

export const updateStudentSchema = Joi.object<CreateStudentParams>({
    name: Joi.string().required(),
    age: Joi.number().required(),
    nivelId: Joi.number().required(),
    classTimeId: Joi.number().required(),
    weekdayId: Joi.number().required(),
});