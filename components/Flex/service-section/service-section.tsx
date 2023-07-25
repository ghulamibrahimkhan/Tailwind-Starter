
export default function ServiceSections(props) {
   return (
      <>
      <div className="max-w-xs px-8 py-10 bg-white rounded-lg shadow-md text-center mt-8">
      {/* @apply inline-block p-4 rounded-full bg-teal-600 text-white; */}

        <div className="inline-block p-4 rounded-full bg-teal-600 text-white">{props.camera}</div>
        <h2 className="m-1 font-bold text-2xl">{props.heading}</h2>
        <p className="mt-4">{props.text}</p>

       </div>
      </>
   )
}
