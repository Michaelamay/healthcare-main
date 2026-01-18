import Image from "next/image";
import healthLogo from '@/public/assets/icons/health-logo.svg';
import medicalStethoscope from '@/public/assets/images/medical-banner-with-stethoscope.jpg'
import PatientForm from "@/components/forms/PatientForm";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src={healthLogo}
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <PatientForm />  
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
            © Michaels Healthcare App Management System Demo
            </p>
         
          </div>
        </div>
      </section>
      <Image
        src={medicalStethoscope}
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />    
    </div>
  )
};

//export default Home;
