import Quote from "./quotes"
export default function Blockquotes() {
    return (
        <>
            {/* main div */}
            <div className="bg-gray-200 max-w-7xl">
                <div className="px-32 py-10">
                    <div className="flex flex-wrap items-center justify-center bg-white rounded-lg p-10">
                        <Quote
                            quote="Be yourself; everyone else is already taken."
                            author="Oscar Wilde" />
                        <Quote quote="The only way to do great work is to love what you do."
                            author="Steve Jobs" />
                        <Quote
                            quote="In the end, it&#39;s not the years in your life that count. It&#39;s the life in your years." author="Abraham Lincoln" />
                    </div>
                </div>
            </div>
        </>
    )
}