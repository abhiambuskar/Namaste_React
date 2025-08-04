const ContactUs = ()=>{
    return (
    <div>
        <h1>Contact Us</h1>

        <div className="flex flex-col items-start p-4">

            <input type="text"  className="border border-black m-2 p-1 rounded-lg" placeholder="name"/>
            <input type="text" className="border border-black m-2 p-4 rounded-lg" placeholder="message"/>
            <button className="bg-green-200 m-4 text-xl p-2 rounded-lg hover:cursor-pointer">Submit</button>
        </div>
    </div>)
}

export default ContactUs