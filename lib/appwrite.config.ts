import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

console.log("Inside appwrite.config.ts. Endpoint value: ", ENDPOINT);
console.log("Inside appwrite.config.ts. Project Id value: ", PROJECT_ID);
console.log("Inside appwrite.config.ts. API_Key value: ", API_KEY);

const client = new sdk.Client();

//client.setEndpoint("https://nyc.cloud.appwrite.io/v1").setProject("696674c90025900c2b78").setKey("standard_d1331b057b7add204d9f999b50b81b16d265c0f7b8cf4bef97f85b01dd7bb211ec82e8494351e6fb96d0d4b270e95efc8379496534afd0427f822bf46c918e89cf0919c5cf91d41ff2298be08cc1543e8e803551bee0f45c0fcd23f9e61bb7ea34675146c9ea39c0b6de11218f280c0c15a745a2e0ce14d7c30971b88a94c7a9");

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);


export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
