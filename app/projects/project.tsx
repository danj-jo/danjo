interface projectProps {
    title: string,
    stack: string
}
const Project = ({ title, stack }: projectProps) => {
    return (
        <div className="flex flex-col w-screen items-center m-3">
            <a href={`projects/${title.toLowerCase()}`} className="w-5/6">
                <div className="
                flex justify-between  bg-gray-900 sm:p-10 rounded-2xl p-6 sm:h-8 opacity-25 text-white items-center hover:bg-[#9e9e9e] hover:opacity-100 transition-colors duration-300 ease-in  ">
                    <p> {title} </p>
                    <p> {stack.toUpperCase()} </p>
                </div>
            </a>
        </div>
    )
}

export default Project