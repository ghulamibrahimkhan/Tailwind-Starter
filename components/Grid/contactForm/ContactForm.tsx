export default function ContacrForm() {
    return (
        <>
            {/* Form 1 */}
            <div>
                <form action="" className="fstForm formContainer grid grid-cols-[auto,1fr] bg-white gap-y-6">

                    <label htmlFor="Name">Full Name</label>
                    <input type="text" id="Name" placeholder="Full Name" className="formInput" />

                    <label htmlFor="Email">Email Address</label>
                    <input type="email" id="Email" placeholder="Email Address" className="formInput" />

                    <button type="submit" className="form-button col-start-2 col-end-3 mt-4">Create Account</button>
                </form>
            </div>

            {/* snd form */}
            <div>
                <form action="" className="sndForm formContainer grid grid-cols-[1fr,1fr] bg-white gap-8">
                    <div>
                        <label htmlFor="Name2">Name</label>
                        <br />
                        <input type="text" name="Name2" id="Name2" placeholder="Full Name" className="formInput" />
                    </div>
                    <div>
                        <label htmlFor="Email2">Email</label>
                        <br />
                        <input type="text" name="Email2" id="Name2"
                            placeholder="Emaik Adress" className="formInput" />
                    </div>
                    <div className="row-start-1 row-end-3 col-start-2 ">
                        <label htmlFor="TextArea">Message</label>
                        <br />
                        <textarea className=" h-auto" rows={5} name="Textarea" id="Textarea" placeholder="Your Message"></textarea>
                    </div>
                    <button className="form-button col-span-2">Send Message</button>
                </form>
            </div>
        </>
    )
}