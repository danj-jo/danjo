interface projectProps {
    title: string,
    stack: string
}
const Project = ({ title, stack }: projectProps) => {
    return (
        <div className="">
            <a href={`projects/${title.toLowerCase()}`}>
                <div className="
               sm:m-2 md:m-2 lg:m2 md:flex md:justify-between bg-gray-900 rounded-2xl p-16 sm:p-6 h-8 opacity-25 text-white sm:items-center hover:bg-[#9e9e9e] hover:opacity-100 transition-colors duration-300 ease-in  ">
                    <p> {title} </p>
                    <p> {stack.toUpperCase()} </p>
                </div>
            </a>
        </div>
    )
}

export default Project