import Head from "next/head";
import Image from "next/image";


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
                  <div className="">
                    <h1 className="text-2xl font-semibold mb-2">SOFTWARE ENGINEER JOB DESCRIPTION</h1>

                    <h2 className="font-semibold mb-1">Responsibilities:</h2>
                    <ul className="list-disc list-inside">
                        <li className="mb-1">Collaborate with cross-functional teams to design, develop, and implement high-quality software solutions.</li>
                        <li className="mb-1">Write clean, efficient, and well-documented code in accordance with industry best practices.</li>
                        <li className="mb-1">Participate in code reviews, provide constructive feedback, and continuously improve coding standards.</li>
                        <li className="mb-1">Analyze user requirements and translate them into technical specifications.</li>
                        <li className="mb-1">Troubleshoot, debug, and resolve software defects and issues.</li>
                        <li className="mb-1">Stay updated on emerging technologies and trends in the financial technology industry.</li>
                    </ul>
                    <h2 className="font-semibold mb-1">Qualifications:</h2>
                    <ul className="list-disc list-inside">
                        <li className="mb-1">Bachelor's or Master's degree in Computer Science, Software Engineering, or related field.</li>
                        <li className="mb-1">Proven experience in software development, with a focus on fintech or related industries.</li>
                        <li className="mb-1">Strong proficiency in programming languages such as Java, Python, or C++.</li>
                        <li className="mb-1">Experience with database design and management (SQL, NoSQL).</li>
                        <li className="mb-1">Solid understanding of software development methodologies, design patterns, and best practices.</li>
                        <li className="mb-1">Excellent problem-solving and analytical skills.</li>
                        <li className="mb-1">Ability to work collaboratively in a team environment.</li>
                        <li className="mb-1">Strong communication skills and the ability to explain technical concepts to non-technical stakeholders.</li>
                    </ul>
                    <p>If you are passionate about technology, finance, and making a meaningful impact, Saitech is the place for you. Join us in revolutionizing the financial industry with innovative software solutions. Apply now to be a part of our dynamic team!</p>
                  </div>
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
                  <div className="">
                    <h1 className="text-2xl font-semibold mb-2">DATA ANALYST JOB DESCRIPTION</h1>
                    <h2 className="font-semibold mb-1">Responsibilities:</h2>
                    <ul className="list-disc list-inside">
                        <li className="mb-1">Gather and analyze large datasets to identify trends, patterns, and insights.</li>
                        <li className="mb-1">Utilize statistical methods and data visualization tools to present findings to both technical and non-technical stakeholders.</li>
                        <li className="mb-1">Develop and maintain interactive dashboards for key performance indicators (KPIs) and metrics.</li>
                        <li className="mb-1">Generate regular reports to provide actionable insights for business improvement.</li>
                        <li className="mb-1">Ensure data accuracy and integrity through thorough cleansing and validation processes.</li>
                        <li className="mb-1">Collaborate with cross-functional teams to address data quality issues.</li>
                        <li  className="mb-1">Work closely with teams across the organization to understand business requirements and provide data-driven solutions.</li>
                    </ul>
                    <h2 className="font-semibold mb-1">Qualifications:</h2>
                    <ul className="list-disc list-inside">
                        <li className="mb-1">Bachelor's degree in a relevant field such as Statistics, Mathematics, Computer Science, or a related discipline.</li>
                        <li className="mb-1">Proven experience as a Data Analyst in the financial or technology industry.</li>
                        <li className="mb-1">Proficiency in data analysis tools such as Python, R, or SQL.</li>
                        <li className="mb-1">Strong knowledge of statistical analysis, data visualization, and reporting.</li>
                        <li className="mb-1">Solid understanding of software development methodologies, design patterns, and best practices.</li>
                    </ul>
                    <p>If you are passionate about leveraging data to drive business success, we invite you to apply for this exciting opportunity. Apply now to be a part of our dynamic team!</p>
                  </div>
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
                  <div className="">
                    <h1 className="text-2xl font-semibold mb-2">DATA SCIENTIST JOB DESCRIPTION</h1>
                    <h2 className="font-semibold mb-1">Responsibilities:</h2>
                    <ul className="list-disc list-inside">
                        <li className="mb-1">Explore and analyze large datasets to identify trends and patterns.</li>
                        <li className="mb-1">Preprocess and clean data for advanced analytics and modeling.</li>
                        <li className="mb-1">Develop and implement machine learning models for predictive and prescriptive analytics.</li>
                        <li className="mb-1">Collaborate with cross-functional teams to integrate models into business processes.</li>
                        <li className="mb-1">Design and implement algorithms to extract meaningful insights from diverse data sources.</li>
                        <li className="mb-1">Optimize algorithms for scalability and performance.</li>
                        <li className="mb-1">Work closely with data engineers, analysts, and business stakeholders to understand requirements and objectives.</li>
                    </ul>
                    <h2 className="font-semibold mb-1">Qualifications:</h2>
                    <ul className="list-disc list-inside">
                        <li className="mb-1">Master's or Ph.D. in a quantitative field such as Computer Science, Statistics, or related disciplines.</li>
                        <li className="mb-1">Proven experience as a Data Scientist in the financial or technology industry.</li>
                        <li className="mb-1">Expertise in machine learning frameworks (e.g., TensorFlow, PyTorch) and statistical analysis tools.</li>
                        <li className="mb-1">Strong programming skills in languages such as Python or R.</li>
                        <li className="mb-1">Knowledge of big data technologies (e.g., Hadoop, Spark) is a plus.</li>
                    </ul>
                    <p>If you are passionate about leveraging advanced analytics and machine learning to drive innovation, we encourage you to submit your resume and a cover letter outlining your relevant experience and achievements.</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
}