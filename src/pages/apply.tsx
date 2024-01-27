import { useUser } from "@clerk/nextjs";
import Head from "next/head";
import toast from "react-hot-toast";
import job_openings from "public/job_openings";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useState } from 'react';
import { JobDescription } from "~/components/job_description";
import { api } from "~/utils/api";
import { Toaster } from "react-hot-toast";
import { FileInput, Label } from "flowbite-react";
import React from "react"; // Import React for JSX support

const applications = job_openings.applications;

/**
 * Component for the job application page.
 */
export default function Application() {
  let openings: React.ReactNode[] = [];

  // Populate the openings dropdown with job positions
  applications.forEach((value: any, key: string) => {
    openings.push(<option key={key} value={key}>{key}</option>);
  });



  const application = api.application.create.useMutation();
  const { user } = useUser();

  // State variables for form inputs
  const [app_name, set_application_name] = useState("Software Engineer");
  const [first_name, set_first_name] = useState("");
  const [middle_name, set_middle_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [app_file_ref, set_app_file_ref] = useState("");

  const handleChangeSelect = (e:ChangeEvent<HTMLSelectElement>) => {
    set_application_name(e.target.value)
  }

  // Handle changes in input fields
  const handleChangeHTML = (e: ChangeEvent<HTMLInputElement>, set_func: Dispatch<SetStateAction<string>>) => {
    set_func(e.target.value);
    console.log(e.target.value + "this is from job apps page")
  };

  // Handle file input change
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      set_app_file_ref(URL.createObjectURL(e.target.files[0]));
      console.log(app_file_ref);
    }
  };

  // Function to create and submit a job application
  const CreateApplication = () => {
    if (first_name === "" || middle_name === "" || last_name === "" || app_file_ref === "") {
      toast.error("Please Complete Form");
    } else {
      application.mutate({
        firstName: first_name,
        middleName: middle_name,
        lastName: last_name,
        email: user!.emailAddresses.toString(),
        resumeLink: app_file_ref
      });
      toast.success("Application Sent");

      // Clear form inputs after submission
      set_first_name("");
      set_middle_name("");
      set_last_name("");
      set_app_file_ref("");
    }
  };

  return (
    <>
      <Head>
        <title>Application Page</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-start">
        <div className="container flex flex-col gap-12 px-4 py-16 ">
          <Toaster position="top-right" />
          <div>
            {/* Display the selected job description */}
          
            <JobDescription application_name={app_name}/>
            <div className="mt-2">
              {/* Dropdown to select job position */}
              Select: <select className="bg-stone-200" value={app_name} onChange={(choice) => handleChangeSelect(choice)}>{openings}</select>
            </div>
          </div>
          {/* Input fields for applicant information */}
          <p>First Name: <input value={first_name} onChange={(choice) => handleChangeHTML(choice, set_first_name)} className="border-black border" type="text"/> </p>
          <p>Middle Name: <input value={middle_name} onChange={(choice) => handleChangeHTML(choice, set_middle_name)} className="border-black border" type="text"/> </p>
          <p>Last Name: <input value={last_name} onChange={(choice) => handleChangeHTML(choice, set_last_name)} className="border-black border" type="text"/> </p>
          <div>
            <div>
              {/* File input for resume upload */}
              <div>
                <div>
                  <Label htmlFor="file-upload-helper-text" value="Upload file" />
                </div>
                <FileInput onChange={(choice) => handleFileChange(choice)} id="file-upload-helper-text" helperText="PNG, DOC, DOCX" />
              </div>
            </div>
            <div className="mt-3">
              {/* Button to submit the job application */}
              <button onClick={CreateApplication} type="submit" className="text-white bg-stone-900 hover:bg-stone-950 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-stone-700 dark:hover:bg-stone-800">Submit</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}