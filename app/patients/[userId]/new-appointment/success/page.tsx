import Link from "next/link";
import React from "react";
import Image from "next/image"
import { getAppointment } from "@/lib/actions/appointment.actions";
import { Doctors } from "@/constants";
import { formatDateTime } from "@/lib/utils";

//http://localhost:3000/patients/6977be860013087723b8/new-appointment/success?appointmentId=undefined

const Success = async ({params: {userId}, searchParams}: SearchParamProps) => {

    const appointmentId = (searchParams?.appointmentId as string) || '';
    const appointment = await getAppointment(appointmentId)

    const doctor = Doctors.find((doc) => doc.name === appointment.primaryPhysician)

    return (
        <div className="flex h-screen max-h-screen px-[5%]">
            <div className="success-img">
                <Link href="/">
                    <Image
                        src="/assets/icons/health-logo.svg"
                        height={1000}
                        width={1000}
                        alt="logo"
                        className="h-10 w-fit"
                    />
                </Link>

                <section className="flex flex-col items-center">

                    <Image
                        src="/assets/gifs/success.gif"
                        height={300}
                        width={280}
                        alt="success"
                    />

                    <h2 className="header mb-6 max-w-[600px] text-center">
                        Congratulations your <span className="text-green-500">appointment request</span> has been submitted.
                    </h2>
                    <p>We will be in touch shortly to confirm.</p>
                </section>

                <section className="request-details">

                    <p>Requested appointment details:</p>
                    <div className="flex items-center gap-3">
                      <Image
                        src={doctor?.image!}
                        alt="doctor"
                        width={100}
                        height={100}
                        className="size-6"
                        
                        /> 

                        <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
                    </div>
                    <div className="flex gap-2">
                        <Image
                            src="/assets/icons/calendar.svg"
                            height={24}
                            width={24}
                            alt="calendar"
                        />
                        <p>{formatDateTime(appointment.schedule).dateTime}</p>
                    </div>

                </section>
                <p className="copyright">© Michaels Healthcare App Management System Demo</p>
            </div>
        </div>
    )
}

export default Success