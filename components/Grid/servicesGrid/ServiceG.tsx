
interface SG {
    heading: string,
    description: string
}

export default function ServiceG(props: SG) {
    return (
        <>
            <div className="p-6">
                <h1 className="text-cyan-300 font-bold text-2xl">{props.heading}</h1>
                <p className="text-gray-300 mt-3">{props.description}</p>
            </div>
        </>
    )
}