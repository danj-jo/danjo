interface projectProps {
    title: string,
    date: string
}
const Project = ({ title, date }: projectProps) => {
    return (
        <div className="project-container">
            <a href={`projects/${title.toLowerCase()}`}>
                <div className="mt-6 flex justify-between m-6 bg-gray-900 rounded-2xl p-6 h-16 opacity-25 text-white items-center hover:bg-[#9e9e9e] hover:opacity-100 transition-colors duration-300 ease-in ">
                    <p> {title} </p>
                    <p> {date} </p>
                </div>
            </a>
        </div>
    )
}

export default Project