import Head from "next/head";
import Image from "next/image";
import { JobDescription } from "~/components/job_description";


export default function Jobs() {

  return (
    <>
      <Head>
        <title>Jobs at Saivest</title>
      </Head>
      <main>
        <ul>
          {/* Software Engineer Position HTML and tailwind.css*/}
          <li>
            <div className="flex h-screen items-center justify-center">
              <div className="flex w-11/12 justify-evenly">
                <Image
                  className="border-2 border-stone-900"
                  alt='Software Engineer'
                  src='/software.png'
                  width={600}
                  height={600}
                />
                <div className="flex w-1/2">
                    <JobDescription application_name="Software Engineer" apply_button={true}/>
                </div>
              </div>
            </div>
          </li>
          {/* Data Analyst PositionHTML and tailwind.css */}
          <li>
            <div className="flex h-screen items-center justify-center">
              <div className="flex w-11/12 justify-evenly">
                <Image
                  className="border-2 border-stone-900"
                  alt='Data Analyst'
                  src='/data_analyst.png'
                  width={600}
                  height={600}
                />
                <div className="flex w-1/2">
                  <JobDescription application_name="Data Analyst" apply_button={true}/>
                </div>
              </div>
            </div>
          </li>
          {/* Data Scientist HTML and CSS */}
          <li>
            <div className="flex h-screen items-center justify-center">
              <div className="flex w-11/12 justify-evenly">
                <Image
                  className="border-2 border-stone-900"
                  alt='Data Scientist'
                  src='/data_scientist.png'
                  width={600}
                  height={600}
                />
                <div className="flex w-1/2">
                <JobDescription application_name="Data Scientist" apply_button={true}/>

                </div>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
}