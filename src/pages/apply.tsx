import { useUser } from "@clerk/nextjs";
import Head from "next/head";

import toast  from "react-hot-toast";
import job_openings from "public/job_openings";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useState } from 'react';
import { JobDescription } from "~/components/job_description";
import { api } from "~/utils/api";
import { Toaster } from "react-hot-toast";
import { FileInput, Label } from "flowbite-react";

const applications = job_openings.applications;

export default function Application() {

 let openings:any[] = []
 applications.forEach((value:any, key:string) => {
   openings.push(<option value={value}>{key}</option>)
 });

 const getInitialState = () => {
    const value = "Data Analyst";
    return value;
 };

 const application = api.application.create.useMutation();
 const { user } = useUser();
 const [application_name, set_application_name] = useState(getInitialState);
 const [first_name, set_first_name] = useState("");
 const [middle_name, set_middle_name] = useState("");
 const [last_name, set_last_name] = useState("");
 const [app_file_ref, set_app_file_ref] = useState("")

const handleChangeHTML = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>, set_func:Dispatch<SetStateAction<string>>) => {
  set_func(e.target.value)
};

const handleFileChange = (e:ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files[0]) {
    set_app_file_ref(URL.createObjectURL(e.target.files[0]));
    console.log(app_file_ref)
  }
};



const CreateApplication = () => {


  if(first_name === "" || middle_name === "" || last_name === "" || app_file_ref === ""){
    toast.error("Please Complete Form");
  }
  else{
    application.mutate({
      firstName:first_name,
      middleName:middle_name,
      lastName:last_name,
      email:user!.emailAddresses.toString(),
      resumeLink: app_file_ref
    })
    toast.success("Application Sent");
    set_first_name("");
    set_middle_name("");
    set_last_name("");
    set_app_file_ref("");

  };
}

 return (
   <>
     <Head>
       <title>Application Page</title>
     </Head>
     <main className="flex min-h-screen flex-col items-center justify-start">

       <div className="container flex flex-col gap-12 px-4 py-16 ">
       <Toaster position="top-right"/>

         <div>
          <JobDescription application_name={application_name} apply_button={false} />
            <div className="mt-2">
              Select: <select className="bg-stone-200" value={application_name} onChange={(choice) => handleChangeHTML(choice, set_application_name)}>{openings}</select>
            </div>
         </div>
          <p>First Name: <input value={first_name} onChange={(choice) => handleChangeHTML(choice, set_first_name)} className="border-black border" type="text"/> </p>
          <p>Middle Name: <input value={middle_name} onChange={(choice) => handleChangeHTML(choice, set_middle_name)} className="border-black border" type="text"/> </p>
          <p>Last Name: <input value={last_name} onChange={(choice) => handleChangeHTML(choice, set_last_name)} className="border-black border" type="text"/> </p>
         <div>
           <div> 
              <div>
                <div>
                  <Label htmlFor="file-upload-helper-text" value="Upload file" />
                </div>
                <FileInput onChange={(choice) => handleFileChange(choice)} id="file-upload-helper-text" helperText="PNG, DOC, DOCX" />
              </div>
          </div>
           <div className="mt-3">
            <button onClick={CreateApplication} type="submit" className="text-white bg-stone-900 hover:bg-stone-950 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-stone-700 dark:hover:bg-stone-800">Submit</button>
           </div>
         </div>
       </div>
     </main>
   </>
 );
}