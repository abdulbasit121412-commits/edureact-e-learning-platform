function About(){
    return (

<main className="flex-grow w-full max-w-5xl  mx-auto px-4 md:px-8 min-h-screen">
     <header className="bg-black  overflow-hidden pb-8">
        
    <nav className="w-full ">
<div className="justify-between items-center flex p-5 mx-auto">
            <h1 className="text-3xl font-semibold text-white ">Edu<span className="text-3xl text-green-500 font-semibold">React</span></h1>
            <ul className="flex flex-row items-center text-center justify-center mx-auto gap-5">
                <li className="text-white text-md font-semibold hover:text-green-500 ">Home</li>
                <li className="text-white text-md font-semibold hover:text-green-500">Courses</li>
                <li className="text-white text-md font-semibold hover:text-green-500 ">About</li>
                <li className="text-white text-md font-semibold hover:text-green-500 ">Contact</li>
            </ul>
            <button className="text-md text-black bg-green-500 rounded-md px-3 py-1 font-semibold">Enroll Now</button>
        </div>
          <div className="bg-[linear-gradient(to_bottom,transparent_30%,black_100%),linear-gradient(to_right,black_10%,#121C1D_30%,#121C1D_70%,black_90%)] pt-12 pb-20 px-8 text-center my-2 mx-5 p-5">
            <button className="text-md font-semibold text-green-400 rounded-2xl px-4 py-1 bg-[#1B302C] ">Our story</button>
        <h2 className="text-white text-4xl font-bold mb-4 py-2">We Teach Code the Right Way</h2>
        <p className="text-gray-400 text-md  max-w-xl mx-auto -my-2 ">
         At Corvit Systems, we believe every student deserves to learn web development with real projects, real tools, and real guidance from day one.</p>
      </div>
    </nav>
    </header>
    <div className=" border-l border-r border-b border-gray-300 max-w-5xl w-full mx-auto  ">
<div className="justify-center items-center flex flex-col p-10 ">
    <h1 className="text-4xl font-semibold text-gray-700">Meet the Team</h1>
    <span className="text-sm font-semibold text-gray-600 my-5">The people who make FIT great</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full max-w-5xl px-5">
<div className="border border-gray-300 rounded-sm w-full  ">
    <div className="flex flex-col justify-center items-center w-full p-5  ">
        <span className="text-xl text-orange-500 font-semibold">SQ</span>
        <span className="text-xl text-gray-900 font-semibold">Syed Qaswar</span>
        <span className="text-xs font-semibold text-gray-500 py-2">Lead Instructor</span>
        <span className="text-gray-400 font-semibold text-xs py-4">ReactJS · JS</span>
    </div>
    </div>




<div className="border border-gray-300 rounded-sm w-full  ">
    <div className="flex flex-col justify-center items-center w-full p-5  ">
        <span className="text-xl text-green-500 font-semibold">SM</span>
        <span className="text-xl text-gray-900 font-semibold">Sara Malik</span>
        <span className="text-xs font-semibold text-gray-500 py-2">Curriculum Lead</span>
        <span className="text-gray-400 font-semibold text-xs py-4">HTML · JS</span>
    </div>
    </div>





    <div className="border border-gray-300 rounded-sm w-full ">
    <div className="flex flex-col justify-center items-center w-full p-5  ">
        <span className="text-xl text-blue-500 font-semibold">AA</span>
        <span className="text-xl text-gray-900 font-semibold">Ali Ahmad</span>
        <span className="text-xs font-semibold text-gray-500 py-2">UI Designer</span>
        <span className="text-gray-400 font-semibold text-xs py-4">Tailwind · CSS</span>
    </div>
    </div>





    <div className="border border-gray-300 rounded-sm w-full  ">
    <div className="flex flex-col justify-center items-center w-full p-5  ">
        <span className="text-xl text-purple-500 font-semibold">UH</span>
        <span className="text-xl text-gray-900 font-semibold">Umar Hassan</span>
        <span className="text-xs font-semibold text-gray-500 py-2">Mentor</span>
        <span className="text-gray-400 font-semibold text-xs py-4">React · Node</span>
    </div>
    </div>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl w-full">
    <div className="flex flex-col justify-start items-start p-5 py-10 ">
        <h1 className="text-2xl font-semibold text-black">Why Students Choose Us</h1>
        <p className="text-sm text-gray-400 py-5">We focus on practical, project-based learning so every student graduates with real work to show.</p>
        
         <div className="space-y-4 text-[#2D3748] text-base md:text-lg">
   

      <div className="flex items-start gap-x-3">
        <span className="h-2 w-2 rounded-full bg-[#52C49A] shrink-0 mt-2" />
        <p className="text-sm font-semibold text-gray-700">Real projects in every session</p>
      </div>


      <div className="flex items-start gap-x-3">
        <span className="h-2 w-2 rounded-full bg-[#52C49A] shrink-0 mt-2" />
        <p className="text-sm font-semibold text-gray-700">PDF notes and handouts provided</p>
      </div>

      

      <div className="flex items-start gap-x-3">
        <span className="h-2 w-2 rounded-full bg-[#52C49A] shrink-0 mt-2" />
        <p className="text-sm font-semibold text-gray-700">Small class sizes for personal attention</p>
      </div>


      <div className="flex items-start gap-x-3">
        <span className="h-2 w-2 rounded-full bg-[#52C49A] shrink-0 mt-2" />
        <p className="text-sm font-semibold text-gray-700">Industry tools: VS Code, Git, Vercel</p>
      </div>

    </div>
    </div>



<div className="grid grid-cols-1 md:grid-cols-2 py-5  gap-5 px-5 items-start">
    <div className="border border-gray-300 rounded-md  p-5 ">
    <div className="flex flex-col justify-start items-start ">
<span className="text-2xl">🎯</span>
<span className="text-sm font-semibold text-black">Project-Based</span>
<span className="text-xs text-gray-400">Every concept backed by a real task</span>
    </div>
    </div>



  <div className="border border-gray-300 rounded-md  p-5 py-7">
    <div className="flex flex-col justify-start items-start ">
<span className="text-2xl">🚀</span>
<span className="text-sm font-semibold text-black">Modern Stack</span>
<span className="text-xs text-gray-400">React, Vite, Tailwind, Vercel</span>
    </div>
    </div>








      <div className="border border-gray-300 rounded-md  p-5">
    <div className="flex flex-col justify-start items-start ">
<span className="text-2xl">📜</span>
<span className="text-sm font-semibold text-black">Certified</span>
<span className="text-xs text-gray-400">Certificate on course completion</span>
    </div>
    </div>









      <div className="border border-gray-300 rounded-md p-5 py-7">
    <div className="flex flex-col justify-start items-start  ">
<span className="text-2xl">💬</span>
<span className="text-sm font-semibold text-black">Mentorship</span>
<span className="text-xs text-gray-400">Ongoing support after class</span>
    </div>
    </div>
</div>
</div>
</div>




<div className="grid grid-cols-1 md:grid-cols-3 gap-5  py-5">
    <div className="border border-gray-300 rounded-md p-5 ">
        <div className="justify-start items-start flex flex-col ">
            <span className="text-md text-gray-500 font-semibold">Section 1</span>
            <span className="text-black text-lg font-semibold">Hero Section</span>
            <span className="text-[12px] text-gray-500 ">Simple centered layout with dark background. Pure JSX — no state needed here.</span>
            <span className=" text-xs text-orange-500 font-semibold ">JSX + Tailwind </span>
        </div>
    </div>




 <div className="border border-gray-300 rounded-md p-5 ">
        <div className="justify-start items-start flex flex-col ">
            <span className="text-md text-gray-500 font-semibold">Section 2</span>
            <span className="text-black text-lg font-semibold">Team Cards Grid</span>
            <span className="text-[12px] text-gray-500 ">Create a teamMembers array with name, role, initials, skill props. Use .map() to render a TeamCard component for each.</span>
            <span className=" text-xs text-green-500 font-semibold ">.map() + Props </span>
        </div>
    </div>









     <div className="border border-gray-300 rounded-md p-5 ">
        <div className="justify-start items-start flex flex-col ">
            <span className="text-md text-gray-500 font-semibold">Section 3</span>
            <span className="text-black text-lg font-semibold">Hero Section</span>
            <span className="text-[12px] text-gray-500 ">Simple centered layout with dark background. Pure JSX — no state needed here.</span>
            <span className=" text-xs text-orange-500 font-semibold ">JSX + Tailwind </span>
        </div>
    </div>





</div>
</main>

    )
}
















export default About