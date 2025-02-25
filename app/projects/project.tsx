interface projectProps {
    title: string,
    stack: string
}
const Project = ({ title, stack }: projectProps) => {
    return (
        <div className="">
            <a href={`projects/${title.toLowerCase()}`}>
                <div className="
               overflow-y-hidden m-3 md:m-2 flex justify-around md:justify-between bg-gray-900 rounded-2xl p-8 md:p-6 h-8 opacity-25 text-white items-center hover:bg-[#9e9e9e] hover:opacity-100 transition-colors duration-300 ease-in  ">
                    <p> {title} </p>
                    <p> {stack.toUpperCase()} </p>
                </div>
            </a>
        </div>
    )
}

export default Project