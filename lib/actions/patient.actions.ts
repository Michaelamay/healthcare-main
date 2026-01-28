'use server';

import { ID, Query } from "node-appwrite"
import {BUCKET_ID, DATABASE_ID, databases, ENDPOINT, PATIENT_COLLECTION_ID, PROJECT_ID, storage, users} from "../appwrite.config"
import { parseStringify } from "../utils";
import { InputFile } from "node-appwrite/file";


export const createUser = async (user: CreateUserParams) => {
    try{

        const newUser = await users.create(ID.unique(), user.email, user.phone, undefined, user.name);

        console.log("newUser created successfully");

        return parseStringify(newUser);

    } catch(error: any){

        console.log("Error creating newUser");

        if(error && error?.code === 409){
            const existingUser = await users.list([
                Query.equal('email', [user.email])
            ])

            return existingUser.users[0]
        }
    }
};

export const getUser = async (userId: string) => {

    try{

        const user = await users.get(userId);

        return parseStringify(user);

    } catch(error){
        console.log(error)
    }

}

export const getPatient = async (userId: string) => {

    console.log("Inside getPatient method.Database Id: ", DATABASE_ID);
    console.log("Inside getPatient method. Patient collection Id: ", PATIENT_COLLECTION_ID);

    try{

        const patients = await databases.listDocuments(
            DATABASE_ID!,
            PATIENT_COLLECTION_ID!,
            [Query.equal('userId',userId)]
        );

        return parseStringify(patients.documents[0]);

    } catch(error){
        console.log(error)
    }

}

export const registerPatient = async ({identificationDocument, ...patient}: RegisterUserParams) => {

    console.log("Inside patient.actions.ts registerPatient method");
    console.log("Inside registerPatient method.Database Id: ", DATABASE_ID);
    console.log("Inside registerPatient method. Patient collection Id: ", PATIENT_COLLECTION_ID);
    console.log("Inside registerPatient method. Bucket Id: ", BUCKET_ID);
    console.log("Inside registerPatient method. Endpoint: ", ENDPOINT);
    console.log("Inside registerPatient method. Project Id: ", PROJECT_ID);
    
    try{
        let file;

        if(identificationDocument){
            const inputFile = InputFile.fromBuffer(
                identificationDocument?.get('blobFile') as Blob,
                identificationDocument?.get('fileName') as string,
            )

            //file = await storage.createFile("696678370015a4d5a7bf", ID.unique(), inputFile)
            file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile)
        }

/*         const newPatient = await databases.createDocument (
            "6966766b000120b3fe77",
            "patient",
            ID.unique(),
            {
                identificationDocumentId: file?.$id || null,
                //identificationDocumentUrl: `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file?.$id}/view?project=${PROJECT_ID}`,
                identificationDocumentUrl: `https://nyc.cloud.appwrite.io/v1/storage/buckets/696678370015a4d5a7bf/files/${file?.$id}/view?project=696674c90025900c2b78`,

                ...patient
            }

        ) */
        const newPatient = await databases.createDocument (
            DATABASE_ID!,
            PATIENT_COLLECTION_ID!,
            ID.unique(),
            {
                identificationDocumentId: file?.$id || null,
                identificationDocumentUrl: `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file?.$id}/view?project=${PROJECT_ID}`,
                //identificationDocumentUrl: `https://nyc.cloud.appwrite.io/v1/storage/buckets/696678370015a4d5a7bf/files/${file?.$id}/view?project=696674c90025900c2b78`,

                ...patient
            }

        )

        return parseStringify(newPatient);
        
    } catch (error){
        console.log(error);
    }

}