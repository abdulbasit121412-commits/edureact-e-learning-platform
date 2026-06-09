function Contact(){
    return (
<main className="min-h-screen max-w-5xl w-full px-8 flex-grow mx-auto">
    <header className="bg-white w-full overflow-hidden pb-8">
        <div className="border border-gray-300 rounded-md p-5">
    <nav className="w-full ">
<div className="justify-between items-center flex flex-row gap-5 mx-auto">
    <h1 className="text-3xl font-semibold text-gray-800">Edu<span className="text-3xl font-semibold text-orange-500">React</span></h1>
    <ul className="flex flex-row items-center mx-auto gap-5">
        <li className="text-md font-semibold text-gray-700 hover:text-green-600">Home</li>
        <li  className="text-md font-semibold text-gray-700 hover:text-green-600">About</li>
        <li className="text-md font-semibold text-gray-700 hover:text-green-600">Course</li>
        <li  className="text-md font-semibold text-gray-700 hover:text-green-600">Contact</li>
    </ul>
    <button className="text-lg font-semibold text-white bg-black rounded-md px-2 ">Enroll Now</button>
    
</div>
    </nav>
</div>
    <div className="justify-center items-center flex flex-col my-10 mx-auto p-5 w-full">
        <span className="text-lg font-semibold text-orange-700">Get in touch</span>
        <h1 className="text-4xl text-gray-900 font-semibold ">We'd Love to Hear From You</h1>
        <span className="text-sm  text-gray-500 py-2 px-5 ">Have a question about a course? Want to enroll? Reach out and</span>
        <span className="text-sm  text-gray-500 pb-2"> we'll respond within 24 hours.</span>
    </div>
</header>

<footer className="bg-white border-t border-x border-gray-400 max-w-5xl w-full py-10  ">
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 ">
        <div className="justify-start items-start  flex flex-col w-full px-5">
            <h1 className="text-3xl text-black font-semibold">Contact Info</h1>
<div className="justify-start items-start flex py-2 " >
                <span className="text-md ">📍</span>
                <div className="flex flex-col  px-5 ">
            <span className="text-sm text-gray-500 font-semibold px-5  ">Address</span>
            <span className="text-sm text-black font-semibold">Lahore, Pakistan</span>
            </div>
            </div>


<div className="justify-start items-start flex  py-2 " >
                <span className="text-md ">📧</span>
                <div className="flex flex-col  px-5 ">
            <span className="text-sm text-gray-500 font-semibold px-5  ">Email</span>
            <span className="text-sm text-black font-semibold">hello@corvit.com</span>
            </div>
            </div>





            <div className="justify-start items-start flex  py-2 " >
                <span className="text-md ">📞</span>
                <div className="flex flex-col  px-5 ">
            <span className="text-sm text-gray-500 font-semibold px-5">
Phone</span>
            <span className="text-sm text-black font-semibold">+92 300 000 0000</span>
            </div>
            </div>




<span className="text-xs text-gray-600 font-bold pt-2">FOLLOW US</span>
<a href="#"><div className="flex flex-row gap-x-2 py-2">
<button className="text-md rounded-lg border border-gray-300 bg-gray-200 px-2 my-1">𝕏</button>
<button className="text-md rounded-lg border border-gray-300 bg-gray-200 px-2 my-1">in</button>
<button className="text-md rounded-lg border border-gray-300 bg-gray-200 px-2 my-1">▶</button>
<button className="text-md rounded-lg border border-gray-300 bg-gray-200 px-2 my-1">ig</button>
</div></a>



        </div>






          <div className="w-full px-5">
          <form className="flex flex-col gap-y-4">
            
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1">First Name</label>
                <input 
                  type="text" 
                  placeholder="Ammar" 
                  className="bg-[#F5F4F0] border-0 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-orange-500 text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Khan" 
                  className="bg-[#F5F4F0] border-0 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-orange-500 text-sm"
                />
              </div>
            </div>

            {/* Email & Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  placeholder="ammar@email.com" 
                  className="bg-[#F5F4F0] border-0 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-orange-500 text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1">Subject</label>
                <select className="bg-[#F5F4F0] border-0 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-orange-500 text-sm cursor-pointer">
                  <option>Course Inquiry</option>
                  <option>General Support</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea 
                rows="4" 
                placeholder="Tell us how we can help you..." 
                className="bg-[#F5F4F0] border-0 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-orange-500 text-sm resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="bg-[#E15A2B] hover:bg-[#ca4f23] text-white font-bold py-3 rounded-xl transition duration-200 mt-2 text-sm"
            >
              Send Message →
            </button>

          </form>
        </div>
    </div>
</footer>

  <div className="bg-[#090A0F] text-white px-8 py-6 rounded-b-2xl flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-y-0 w-full mb-10">
        <div className="text-xl font-bold tracking-wide">
          <span className="text-white">Edu</span>
          <span className="text-[#E15A2B]">React</span>
        </div>
        <div className="text-xs text-gray-500 text-center">
          © 2026 Corvit Systems. All rights reserved.
        </div>
        <div className="flex gap-x-6 text-xs text-gray-400">
          <a href="#" className="hover:text-white transition duration-200">Privacy</a>
          <a href="#" className="hover:text-white transition duration-200">Terms</a>
          <a href="#" className="hover:text-white transition duration-200">Contact</a>
        </div>
      </div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-atuo">
    <div className="rounded-lg border border-gray-400 p-2 pt-5 px-5">
        <div className="flex flex-col justify-start items-start py-1">
            <h1 className="text-md text-gray-500 font-semibold pt-1">section 1</h1>
            <span className="text-md text-black font-semibold pt-1">Contact Info Cards</span>
            <span className="text-xs text-gray-400 pt-1">Store contact info in an array. Use .map() to render each InfoCard with icon, label, value props.</span>
            <span className="text-xs text-green-800 mt-2 border border-green-300 rounded-md px-1 py-1 bg-green-100">.map() + Props</span>
        </div>
    </div>



     <div className="rounded-lg border border-gray-400 p-2 pt-5 px-5">
        <div className="flex flex-col justify-start items-start py-1">
            <h1 className="text-md text-gray-500 font-semibold pt-1">section 2</h1>
            <span className="text-md text-black font-semibold pt-1 ">Contact Form</span>
            <span className="text-xs text-gray-400 pt-1 ">Each input field uses useState to track its value. On submit, validate fields and show success or error message conditionally.</span>
            <span className="text-xs text-orange-800 mt-2 border border-orange-300 rounded-md px-1 py-1 bg-orange-100">useState + Events</span>
        </div>
    </div>







     <div className="rounded-lg border border-gray-400 p-2 pt-5 px-5">
        <div className="flex flex-col justify-start items-start py-1">
            <h1 className="text-md text-gray-500 font-semibold pt-1">section 3</h1>
            <span className="text-md text-black font-semibold pt-1">Footer Component</span>
            <span className="text-xs text-gray-400 pt-1">Reusable Footer component shared across all 4 pages. Receives logo and links as props optionally.</span>
            <span className="text-xs text-purple-800 mt-2 border border-purple-300 rounded-md px-1 py-1 bg-purple-100">Reusable Component</span>
        </div>
    </div>
</div>



</main>
    )
}








export default Contact