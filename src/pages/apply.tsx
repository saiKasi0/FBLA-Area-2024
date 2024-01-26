import Head from "next/head";
import job_openings from "public/job_openings";
import { ChangeEvent } from "react";
import { api } from "~/utils/api";
import { useUser } from "@clerk/nextjs";
import { useState } from 'react';
import { JobDescription } from "~/components/job_description";

const applications = job_openings.applications;

export default function Application() {
 // const hello = api.post.hello.useQuery({ text: "from tRPC" });

 let openings:any[] = []
 applications.forEach((value:any, key:string) => {
   openings.push(<option value={key}>{key}</option>)
 });

 const getInitialState = () => {
    const value = "Data Analyst";
    return value;
 };
 const [application_name, set_application_name] = useState(getInitialState);

 const handleChange = (e:ChangeEvent<HTMLSelectElement>) => {
    set_application_name(e.target.value)
    console.log(set_application_name)
 };
 

 return (
   <>
     <Head>
       <title>Application Page</title>
     </Head>
     <main className="flex min-h-screen flex-col items-center justify-start">

       <div className="container flex flex-col gap-12 px-4 py-16 ">
         <div>
            <select value={application_name} onChange={(choice) => handleChange(choice)}>{openings}</select>
            <JobDescription application_name={application_name} apply_button={false} />
         </div>
         {/* FIXME inputs and style the things also do backend*/}
         <p>First Name: <input className="bg-white border-black" type="text"/> </p>
         <p>Middle Name: <input type="text"/> </p>
         <p>Last Name: <input type="text"/> </p>
         <div>
           <div> 
              <div className="flex items-center justify-center w-full">
                  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-black border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg- hover:bg-gray-100 dark:border-stone-100 dark:hover:border-stone-100 dark:hover:bg-stone-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400"> PNG, DOC or DOCX</p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" />
                      
                  </label>
              </div> 
           </div>
           <div className="mt-3">
            <button type="button" className="text-white bg-stone-900 hover:bg-stone-950 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-stone-700 dark:hover:bg-stone-800">Submit</button>
           </div>
         </div>
       </div>
     </main>
   </>
 );
}


