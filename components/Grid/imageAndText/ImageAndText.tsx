import Image from "next/image";

export default function ImageAndText() {
    return (
        <>
            <div className="bg-white p-10 sm:p-14 w-auto min-h-screen grid md:grid-cols-[auto,auto] gap-16 items-center">

                <Image src="/top-image.svg" alt="web intro svg" height={500} width={500} className=" object-cover w-auto md:w-[50vh]" />
                <div>
                    <h3 className="text-4xl leading-tight">Perfect Solution
                    <br />
                        <strong>For your small buisness</strong>
                    </h3>
                    <p className="mt-4">Maecenas fringilla quam posuere, pellentesque est nec, gravida turpis. Integer vitae mollis felis. Integer id quam id tellus hendrerit laciniad binfer</p>
                    <p className="mt-4">Sed id dui rutrum, dictum urna eu, accumsan turpis. Fusce id auctor velit, sed viverra dui rem dina</p>
                    <button className="mt-4 py-3 px-9 bg-red-500 text-white font-bold rounded-full">Modal</button>
                </div>
            </div>
        </>
    )
}