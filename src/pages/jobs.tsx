import Head from "next/head";
import Image from "next/image";
import { JobDescription } from "~/components/job_description";
import React from "react"; // Import React for JSX support

/**
 * Jobs component representing the Saivest job listings page.
 * Displays job positions with corresponding descriptions and application details.
 */
export default function Jobs() {
  return (
    <>
      {/* Head section for metadata */}
      <Head>
        <title>Jobs at Saivest</title>
      </Head>

      {/* Main content section */}
      <main>
        {/* List of job positions */}
        <ul>
          {/* Software Engineer Position */}
          <li>
            {/* Container for Software Engineer position */}
            <div className="flex h-screen items-center justify-center">
              <div className="flex w-11/12 justify-evenly">
                {/* Image for Software Engineer */}
                <Image
                  className="border-2 border-stone-900"
                  alt='Software Engineer'
                  src='/software.png'
                  width={600}
                  height={600}
                />
                {/* Job description for Software Engineer */}
                <div className="flex w-1/2">
                  <JobDescription application_name="Software Engineer"/>
                </div>
              </div>
            </div>
          </li>

          {/* Data Analyst Position */}
          <li>
            {/* Container for Data Analyst position */}
            <div className="flex h-screen items-center justify-center">
              <div className="flex w-11/12 justify-evenly">
                {/* Image for Data Analyst */}
                <Image
                  className="border-2 border-stone-900"
                  alt='Data Analyst'
                  src='/data_analyst.png'
                  width={600}
                  height={600}
                />
                {/* Job description for Data Analyst */}
                <div className="flex w-1/2">
                  <JobDescription application_name="Data Analyst"/>
                </div>
              </div>
            </div>
          </li>

          {/* Data Scientist Position */}
          <li>
            {/* Container for Data Scientist position */}
            <div className="flex h-screen items-center justify-center">
              <div className="flex w-11/12 justify-evenly">
                {/* Image for Data Scientist */}
                <Image
                  className="border-2 border-stone-900"
                  alt='Data Scientist'
                  src='/data_scientist.png'
                  width={600}
                  height={600}
                />
                {/* Job description for Data Scientist */}
                <div className="flex w-1/2">
                  <JobDescription application_name="Data Scientist"/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
}
