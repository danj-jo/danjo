import Card from "@/components/Card"
import Image from "next/image"
export default function About() {
    return (
        <>
            <div className="sm:w-1024 
            text-center lg:w-96 lg:mx-auto lg: my-auto lg:mt-20 p-6 bg-gray-900 opacity-50 text-white rounded-2xl shadow-md
            flex-col">
                <p>
                    Dana Jones is a dedicated, self-taught engineer with industry experience building frontend and fullstack applications. His passion for design and seamless user experiences stems from a deep appreciation for art, aesthetics, and real-world utility.
                </p>
                <br />
                <p>
                    Before transitioning into tech, I spent six years as a barber, honing my eye for detail, creativity, and client-first problem-solving—skills I now bring into every product I build.
                </p>
                <div className="
            fixed  bottom-5 justify-center p-6  bg-gray-900 text-white rounded-2xl shadow-m lg:w-72 lg:mt-20 p-6 flex justify-between">
                    <a href="github.com/danj-jo">
                        <Image alt="Link to my Github account." src="/github-mark-white.png" width="40" height="100" />
                    </a>
                    <a href="https://www.linkedin.com/in/danj-jo/">
                        <Image alt="Link to my LinkedIn account." src="/linkedin.png" width="40" height="100" />
                    </a>
                    <a href="mailto:danajonesdev@gmail.com">
                        <Image alt="Link to email me." src="/gmail.png" width="40" height="100" />
                    </a>
                    <a href="https://codepen.io/danj-jo">
                        <Image alt="Link to my Codepen account." src="/codepen.png" width="40" height="100" />
                    </a>
                </div>
            </div>

        </>
    )
}