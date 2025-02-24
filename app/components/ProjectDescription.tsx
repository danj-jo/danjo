interface descriptionProps {
    description: string;
}
const ProjectDescription: React.FC<descriptionProps> = ({ description }: descriptionProps) => {
    return (
        <p className="m-12 p-6 bg-gray-900 opacity-50 text-white rounded-2xl shadow-md">
            {description}
        </p>
    )
}

export default ProjectDescription