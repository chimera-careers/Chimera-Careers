import React, { useState } from "react";
import BasicDetails from "./BasicDetails";
import VerificationCenter from "./VerificationCenter";
import ProfessionalDetails from "./ProfessionalDetails";
import EmploymentDetails from "./EmploymentDetails";
import JobPreference from "./JobPreference";

function RegistrationForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex flex-row w-100%  mt-10">
      <div className="w-2/4 md:flex hidden  justify-center ">
        <ul className="space-y-2 flex flex-col gap-16">
          <li
            className={`cursor-pointer ${
              step === 1 ? "font-semibold" : "text-gray-500"
            }`}
            onClick={() => setStep(1)}
          >
            Step 1: Basic Details
          </li>
          <li
            className={`cursor-pointer ${
              step === 2 ? "font-semibold" : "text-gray-500"
            }`}
            onClick={() => setStep(2)}
          >
            Step 2: Verification Center
          </li>
          <li
            className={`cursor-pointer ${
              step === 3 ? "font-semibold" : "text-gray-500"
            }`}
            onClick={() => setStep(3)}
          >
            Step 3: Professional Details
          </li>
          <li
            className={`cursor-pointer ${
              step === 4 ? "font-semibold" : "text-gray-500"
            }`}
            onClick={() => setStep(4)}
          >
            Step 4: Employment Details
          </li>
          <li
            className={`cursor-pointer ${
              step === 5 ? "font-semibold" : "text-gray-500"
            }`}
            onClick={() => setStep(5)}
          >
            Step 5: Job Preference
          </li>
        </ul>
      </div>
      <div className="w-full md:w-2/4 h-[580px] flex justify-center overflow-scroll overflow-x-hidden">

        {step === 1 && <BasicDetails nextStep={nextStep} />}
        {step === 2 && (
          <VerificationCenter nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 3 && (
          <ProfessionalDetails nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 4 && (
          <EmploymentDetails nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 5 && <JobPreference prevStep={prevStep} />}
      </div>
    </div>
  );
}

export default RegistrationForm;
