import Project from "./project"
export default function Projects() {
    return (
        <div className="flex-col justify-center items-center lg:m-24">
            <Project title="VELMA" stack="Typescript, React, Node.JS, Espresso" />
            <Project title="TIKURI-CO" stack="Typescript, React, Node.JS, MongoDB" />
            <Project title="MASTERMIND-REMIX" stack="Typescript, React, Node.JS, MongoDB" />
            <Project title="THE-LEDGE-NoSQL" stack="Java, Spring Boot, MongoDB" />
            <Project title="THE-LEDGE" stack="Java, Spring Boot, MySQL" />
            <Project title="SCRAMAZON" stack="Java, CLI" />
            <Project title="COUPES&CARRAIGES" stack="Java, CLI" />
            <Project title="WEAVER" stack="Swift, SwiftUI" />
        </div>
    )
}