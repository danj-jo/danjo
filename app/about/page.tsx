import Card from "@/components/Card"
import Image from "next/image"
export default function About() {
    return (
        <>
            <Card />
            <div className="fixed bottom-5 left-0 w-full p-6  bg-gray-900 opacity-50 text-white rounded-2xl shadow-m flex justify-between">
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
        </>
    )
}