import Card from "@/components/Card"
import Image from "next/image"
export default function About() {
    return (
        <div className="flex items-center justify-center h-screen overflow-hidden ">
        <div className="sm:w-96 
        text-center w-96 p-6 bg-gray-900 opacity-50 text-white rounded-2xl shadow-md
        overflow-hidden">
                <p>
                    Dana Jones is a dedicated, self-taught engineer with industry experience building frontend and fullstack applications. His passion for design and seamless user experiences stems from a deep appreciation for art, aesthetics, and real-world utility.
                </p>
                <br />
                <p>
                    Before transitioning into tech, he spent six years as a barber, honing his eye for detail, creativity, and client-first problem-solving— skills that he now brings into every product he builds.
                </p>
                <div className="
                bg-gray-900 text-white rounded-2xl shadow-m p-8 flex justify-between">
                    <a href="github.com/danj-jo">
                        <Image alt="Link to my Github account." src="/github-mark-white.png" width="30" height="0" />
                    </a>
                    <a href="https://www.linkedin.com/in/danj-jo/">
                        <Image alt="Link to my LinkedIn account." src="/linkedin.png" width="30" height="0" />
                    </a>
                    <a href="mailto:danajonesdev@gmail.com">
                        <Image alt="Link to email me." src="/gmail.png" width="30" height="0" />
                    </a>
                    <a href="https://codepen.io/danj-jo">
                        <Image alt="Link to my Codepen account." src="/codepen.png" width="30" height="0" />
                    </a>
                </div>
            </div>

        </div>
    )
}