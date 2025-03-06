interface descriptionProps {
    description: string;
    url: string;
}
const ProjectDescription: React.FC<descriptionProps> = ({ description, url }: descriptionProps) => {
    return (
        <div className="flex items-center justify-center h-screen overflow-hidden ">
        <div className="sm:w-96 
        text-center w-96 p-6 bg-gray-900 opacity-50 text-white rounded-2xl shadow-md
        ">
            <p>
                {description}
            </p>
            <button className="underline" onClick={() => {
                window.open(url, "_blank")
            }}> Repo </button>


        </div>
        </div>
    )
}

export default ProjectDescription