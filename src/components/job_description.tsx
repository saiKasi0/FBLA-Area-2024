import job_openings from "public/job_openings"; 

function array_to_li(arr:string[]){
    let list_items:React.JSX.Element[] = []
    for (let i = 0; i < arr.length; i++){
        list_items.push(<li key={i} className="mb-1">{arr[i]}</li>);
    }
    return <ul className="list-disc list-inside">{list_items}</ul>
}

const applications = job_openings.applications;

export const JobDescription = (props:{application_name:string}) => {
    let application_info = applications.get(props.application_name)!
    return (
        <div>
            <div>
            <h1 className="flex justify-start items-center text-2xl font-semibold mb-2">
                <div className="mr-3">
                {application_info.title} 
                </div>
                <button type="button" className="text-white bg-stone-900 hover:bg-stone-950 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-stone-700 dark:hover:bg-stone-800">Apply</button>
            </h1>
            <h2 className="font-semibold mb-1">Responsibilities:</h2>
            {array_to_li(application_info.responsibilities)}
            <h2 className="font-semibold mb-1">Qualifications:</h2>
            {array_to_li(application_info.responsibilities)}
            <p> { application_info.end_statement } </p>
        </div>
    </div>
    )
}