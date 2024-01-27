import job_openings from "public/job_openings";

/**
 * Converts an array of strings into a list of HTML list items.
 * @param arr - The array of strings to be converted into list items.
 * @returns JSX element representing an unordered list.
 */
function array_to_li(arr: string[]): React.JSX.Element {
    let list_items: React.JSX.Element[] = [];
    for (let i = 0; i < arr.length; i++) {
        list_items.push(<li key={i} className="mb-1">{arr[i]}</li>);
    }
    return <ul className="list-disc list-inside">{list_items}</ul>;
}

/**
 * Displays the job description, including responsibilities, qualifications, and an application end statement.
 * @param props - React component props containing the application name and apply button status.
 * @returns JSX element representing the job description.
 */
export const JobDescription = (props: { application_name: string, apply_button: boolean }) => {
    // Retrieve application information based on the application name.
    let application_info = job_openings.applications.get(props.application_name)!;

    return (
        <div>
            <div>
                <h1 className="flex justify-start items-center text-2xl font-semibold mb-2">
                    <div className="mr-3">
                        {application_info.title}
                    </div>
                    <div>
                        {/* Additional elements can be added here if needed */}
                    </div>
                </h1>
                <h2 className="font-semibold mb-1">Responsibilities:</h2>
                {array_to_li(application_info.responsibilities)}
                <h2 className="font-semibold mb-1">Qualifications:</h2>
                {array_to_li(application_info.qualifications)} {/* Fixed: Changed from 'responsibilities' to 'qualifications' */}
                <p>{application_info.end_statement}</p>
            </div>
        </div>
    );
};
