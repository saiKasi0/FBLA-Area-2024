import Head from "next/head";
import job_openings from "public/job_openings";
import { ChangeEvent } from "react";
import { useUser } from "@clerk/nextjs";

const applications = job_openings.applications;
const { user } = useUser();

function map_keys_to_options (){
  

 let openings:any[] = []
 applications.forEach((value:any, key:string) => {
   openings.push(<option value={key}>{key}</option>)
 });

 function setUserChoice(choice: ChangeEvent<HTMLSelectElement>): void {
  // TODO
    let u = choice.target.value
 }


 return <select onChange={choice => setUserChoice(choice)} >{openings}</select>;
}

export default function Application() {
 // const hello = api.post.hello.useQuery({ text: "from tRPC" });
 return (
   <>
     <Head>
       <title>Application Page</title>
     </Head>
     <main className="flex min-h-screen flex-col items-center justify-start">

       <div className="container flex flex-col gap-12 px-4 py-16 ">
         <div>
           {map_keys_to_options()}
           {/* <JobDescription application_name={applicationType} apply_button={false}/> */}
         </div>
         <p className="">First Name: <input type="text"/> </p>
         <p>Middle Name: <input type="text"/> </p>
         <p>Last Name: <input type="text"/> </p>
         <div>
           <p>Upload Resume</p>
           <div> 
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
           </div>
         </div>
       </div>
     </main>
   </>
 );
}


