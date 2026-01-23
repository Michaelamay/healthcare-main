import Image from "next/image";
import healthLogo from '@/public/assets/icons/health-logo.svg';
import medicalStethoscope from '@/public/assets/images/medical-banner-with-stethoscope.jpg'
import PatientForm from "@/components/forms/PatientForm";
import AppointmentForm from "@/components/forms/AppointmentForm";

export default async function NewAppointment({params: {userId}} : SearchParamProps) {
    
    const patient = await getPatient(userId);
  
    return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src={healthLogo}
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            type="create"
            userId={userId}
          
          />  

          
        <p className="justify-items-end text-dark-600 xl:text-left">
            © Michaels Healthcare App Management System Demo
        </p>
         
          
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment image"
        className="side-img max-w-[390px] bg-bottom"
      />    
    </div>
  )
};

//export default Home;
