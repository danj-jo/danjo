'use client'
import ProjectDescription from "@/components/ProjectDescription"
import { useEffect } from "react"


export default function Test() {
    useEffect(() => {
        fetch("https://api.github.com/users/danj-jo/repos").then(data => data.json())
            .then(response => console.log(response))
    })

    return <button> Test</button>

}