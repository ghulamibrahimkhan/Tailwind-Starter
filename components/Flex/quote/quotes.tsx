
interface QutProps {
    quote: string,
    author : string
}

export default function Quote(props : QutProps) {
    return (
        <>
            <blockquote className="quote">
                <p>
                    {props.quote}
                </p>
                <cite>{props.author}</cite>
            </blockquote>
        </>
    )
}