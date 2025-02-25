'use client'
import ProjectDescription from "@/components/ProjectDescription"

export default function MastermindBackend() {
    return (
        <>
            <ProjectDescription description="
        Mastermind is a backend game I built using Node.js and Express, where the objective is to guess a combination correctly within 10 tries. The game offers three difficulty levels—easy, medium, and hard—each increasing the number of digits in the combination to guess. It features user authentication and authorization using bcrypt and cookies. Additionally, user data, game progress, and settings are stored with MongoDB and cookies, ensuring a personalized experience for each player.
      "
                url="https://github.com/danj-jo/mastermind-reach" />

        </>
    )
}
