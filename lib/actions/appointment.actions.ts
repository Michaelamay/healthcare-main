'use server'

import { ID } from "node-appwrite";
import { parseStringify } from "../utils";
import {APPOINTMENT_COLLECTION_ID, DATABASE_ID, databases} from "../appwrite.config"

console.log("Inside appointment.actions.ts file");

export const createAppointment = async (appointment: CreateAppointmentParams) => {
    try{
        
        console.log("Inside createAppointment const");

/*         const newAppointment = await databases.createDocument (
            "6966766b000120b3fe77",
            "appointment",
            ID.unique(),
            appointment,

        ) */

        const newAppointment = await databases.createDocument (
                DATABASE_ID!,
                APPOINTMENT_COLLECTION_ID!,
                ID.unique(),
                appointment,
    
        )
        return parseStringify(newAppointment);

    } catch (error){

        console.log("Inside catch of appointment.actions.ts");

        console.log(error);
    }
}

export const getAppointment = async (appointmentId: string) => {
    try{

        const appointment = await databases.getDocument(
            DATABASE_ID!,
            APPOINTMENT_COLLECTION_ID!,
            appointmentId,
        )

        return parseStringify(appointment);

    }catch(error){
        console.log(error);
    }
}