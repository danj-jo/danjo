'use client'
import ProjectDescription from "@/components/ProjectDescription"

export default function MastermindRemix() {
    return (
        <>
            <ProjectDescription description="
        Mastermind-Remix is a full-stack rendition of the classic Mastermind game, which I initially built using pure Node.js and Express. For the full-stack version, I utilized MongoDB, TypeScript, Node.js, and React. The goal of the game is to guess a randomly generated number combination within 10 attempts, with the combination fetched through an API.The game offers three difficulty levels—easy, medium, and hard—each increasing the number of digits in the combination to guess. Additionally, the game includes user authentication and authorization, ensuring a secure and engaging experience.
      "
                url="https://github.com/danj-jo/mastermind-remix" />

        </>
    )
}
