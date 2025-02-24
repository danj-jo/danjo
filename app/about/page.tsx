import Card from "@/components/Card"
export default function About() {
    return (
        <>
            <Card />
            <div className="m-12 p-6 bg-gray-900 opacity-50 text-white rounded-2xl shadow-m flex justify-between">
                <img src="/github-mark-white.png" width="40" height="100" />
                <img src="/linkedin.png" width="40" height="100" />
                <img src="/gmail.png" width="40" height="100" />
                <img src="/codepen.png" width="40" height="100" />
            </div>
        </>
    )
}