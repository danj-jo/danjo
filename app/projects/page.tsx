import Project from "./project"
export default function Projects() {
    return (
        <div className=" h-screen flex flex-col justify-center p-6">
            <Project title="VELMA" stack="MERN, Espresso" />
            <Project title="TIKURI-CO" stack="MERN" />
            <Project title="MASTERMIND-REMIX" stack="MERN" />
            <Project title="THE-LEDGE-NOSQL" stack="Spring Boot, MongoDB" />
            <Project title="THE-LEDGE" stack="Spring Boot, MySQL" />
            <Project title="SCRAMAZON" stack="Java, CLI" />
            <Project title="COUPES&CARRAIGES" stack="Java, CLI" />
            <Project title="WEAVER" stack="Swift, SwiftUI" />
        </div>
    )
}