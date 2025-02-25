interface descriptionProps {
    description: string;
    url: string;
}
const ProjectDescription: React.FC<descriptionProps> = ({ description, url }: descriptionProps) => {
    return (
        <div className="sm:w-1024 
            text-center lg:w-96 lg:mx-auto lg: my-auto lg:mt-20 p-6 bg-gray-900 opacity-50 text-white rounded-2xl shadow-md
            flex-col flex-col justify-around">
            <p>
                {description}
            </p>
            <button className="underline" onClick={() => {
                window.open(url, "_blank")
            }}> Repo </button>


        </div>
    )
}

export default ProjectDescription