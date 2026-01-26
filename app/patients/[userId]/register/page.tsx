import React from 'react'
import Image from 'next/image'
import RegisterForm from '@/components/forms/RegisterForm'
import {getUser} from '@/lib/actions/patient.actions'

//THIS IS THE SECOND PAGE, THE REGISTER FORM SKELETON.

const Register = async ({params: {userId}}: SearchParamProps) => {

    const user = await getUser(userId);

    return (
        <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container">
          <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
            <Image
              src="/assets/icons/health-logo.svg"
              height={1000}
              width={1000}
              alt="patient"
              className="mb-12 h-10 w-fit"
            />
  
            <RegisterForm user={user} />

            <p className="copyright py-12">
              © Michaels Healthcare App Management System Demo
            </p>
  
          </div>
        </section>
        <Image
          src="/assets/images/register.jpg"
          height={1000}
          width={1000}
          alt="patient"
          className="side-img max-w-[390px]"
        />    
      </div>
    )
}

export default Register