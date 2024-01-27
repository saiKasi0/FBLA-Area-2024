/**
 * Describes the job application details for a Software Engineer position.
 */
const software_engineer_application = {
    title: "SOFTWARE ENGINEER JOB DESCRIPTION",
    responsibilities: [
        // Responsibilities of a Software Engineer
        "Collaborate with cross-functional teams to design, develop, and implement high-quality software solutions.",
        "Write clean, efficient, and well-documented code in accordance with industry best practices.",
        "Participate in code reviews, provide constructive feedback, and continuously improve coding standards.",
        "Analyze user requirements and translate them into technical specifications.",
        "Troubleshoot, debug, and resolve software defects and issues.",
        "Stay updated on emerging technologies and trends in the financial technology industry.",
    ],
    qualifications: [
        // Qualifications for a Software Engineer
        "Bachelor's or Master's degree in Computer Science, Software Engineering, or related field.",
        "Proven experience in software development, with a focus on fintech or related industries.",
        "Strong proficiency in programming languages such as Java, Python, or C++.",
        "Experience with database design and management (SQL, NoSQL)",
        "Solid understanding of software development methodologies, design patterns, and best practices.",
        "Excellent problem-solving and analytical skills.",
        "Ability to work collaboratively in a team environment.",
        "Strong communication skills and the ability to explain technical concepts to non-technical stakeholders."
    ],
    end_statement: "If you are passionate about technology, finance, and making a meaningful impact, Saitech is the place for you. Join us in revolutionizing the financial industry with innovative software solutions. Apply now to be a part of our dynamic team!",
}

/**
 * Describes the job application details for a Data Analyst position.
 */
const data_analyst_application = {
    title: "DATA ANALYST JOB DESCRIPTION",
    responsibilities: [
        // Responsibilities of a Data Analyst
        "Gather and analyze large datasets to identify trends, patterns, and insights.",
        "Utilize statistical methods and data visualization tools to present findings to both technical and non-technical stakeholders.",
        "Generate regular reports to provide actionable insights for business improvement.",
        "Ensure data accuracy and integrity through thorough cleansing and validation processes.",
        "Collaborate with cross-functional teams to address data quality issues.",
        "Work closely with teams across the organization to understand business requirements and provide data-driven solutions.",
    ],
    qualifications: [
        // Qualifications for a Data Analyst
        "Bachelor's degree in a relevant field such as Statistics, Mathematics, Computer Science, or a related discipline.",
        "Proven experience as a Data Analyst in the financial or technology industry.",
        "Proficiency in data analysis tools such as Python, R, or SQL.",
        "Strong knowledge of statistical analysis, data visualization, and reporting.",
        "Solid understanding of software development methodologies, design patterns, and best practices."
    ],
    end_statement: "If you are passionate about leveraging data to drive business success, we invite you to apply for this exciting opportunity. Apply now to be a part of our dynamic team!",
}

/**
 * Describes the job application details for a Data Scientist position.
 */
const data_scientist_application = {
    title: "DATA SCIENTIST JOB DESCRIPTION",
    responsibilities: [
        // Responsibilities of a Data Scientist
        "Explore and analyze large datasets to identify trends and patterns.",
        "Preprocess and clean data for advanced analytics and modeling.",
        "Develop and implement machine learning models for predictive and prescriptive analytics.",
        "Collaborate with cross-functional teams to integrate models into business processes.",
        "Design and implement algorithms to extract meaningful insights from diverse data sources.",
        "Optimize algorithms for scalability and performance.",
        "Work closely with data engineers, analysts, and business stakeholders to understand requirements and objectives.",
        "Communicate complex technical findings to non-technical audiences."
    ],
    qualifications: [
        // Qualifications for a Data Scientist
        "Master's or Ph.D. in a quantitative field such as Computer Science, Statistics, or related disciplines.",
        "Proven experience as a Data Scientist in the financial or technology industry.",
        "Expertise in machine learning frameworks (e.g., TensorFlow, PyTorch) and statistical analysis tools.",
        "Strong programming skills in languages such as Python or R.",
        "Knowledge of big data technologies (e.g., Hadoop, Spark) is a plus."
    ],
    end_statement: "If you are passionate about leveraging advanced analytics and machine learning to drive innovation, we encourage you to submit your resume and a cover letter outlining your relevant experience and achievements.",
}

/**
 * Represents a collection of job applications mapped by job title.
 */
const applications: Map<string, typeof software_engineer_application> = new Map();
applications.set("Software Engineer", software_engineer_application)
applications.set("Data Analyst", data_analyst_application)
applications.set("Data Scientist", data_scientist_application)

// Export the applications for external use.
export default { applications };