function Courses() {
  return (
    <main className="flex-grow w-full max-w-5xl mx-auto px-4 md:px-8">
      
      {/* ── NAVBAR SECTION ── */}
      <div className="flex flex-row items-center justify-between gap-4 bg-white px-8 py-4 border-b border-gray-200 w-full">
        {/* 1. Logo (Left Side) */}
        <div className="logo text-4xl text-black font-bold flex-shrink-0">
          Edu<span className="text-blue-600">React</span>
        </div>

        {/* 2. Search Bar (Middle) */}
        <div className="flex flex-1 max-w-xl items-center gap-2 bg-[#f5f4f0] border border-gray-300 rounded-lg px-4 py-2">
          <span className="text-gray-400 text-lg">🔍</span>
          <input 
            type="text" 
            placeholder="Search courses..." 
            className="bg-transparent border-none outline-none w-full text-gray-800 placeholder-gray-400 text-sm"
          />
        </div>

        {/* 3. Filter Buttons (Right Side) */}
        <div className="flex gap-2 flex-shrink-0">
          <button className="px-4 py-2 bg-black text-white text-xs font-semibold rounded-lg">
            All
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 text-xs font-semibold rounded-lg">
            JS
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 text-xs font-semibold rounded-lg">
            React
          </button>
        </div>
      </div>

      {/* ── HERO BANNER ── */}
      <div className="flex flex-row items-start md:items-center px-10 py-6 justify-between gap-5 bg-blue-900 text-white border border-gray-200 border-b border-t">
        <div className="max-w-md">
          <span className="text-4xl font-bold pb-2">All Courses</span>
          <p className="text-xs text-white font-semibold pt-2">
            From HTML basics to full React apps — everything you need <br /> to become a frontend developer.
          </p>
        </div>

        <div className="flex flex-row px-10 space-x-20">
          <div className="text-center">
            <span className="font-bold text-4xl">6</span>
            <p className="text-sm text-gray-300 font-semibold">Courses</p>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold">120+</span>
            <p className="text-sm text-gray-300 font-semibold">Students</p>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold">4.9</span>
            <p className="text-sm font-semibold text-gray-300">Rating</p>
          </div>
        </div>
      </div>

      {/* ── CATEGORY GRID SECTION ── */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 border-gray-300 border-r">
        
        {/* COLUMN 1: SIDEBAR */}
        <div className="border-t border-l border-r border-stone-300 max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-2 relative justify-start items-start text-left px-10 py-5">
            <h1 className="text-md text-gray-700 font-semibold border-gray-700 border px-3 rounded-lg -ml-8 bg-gray-300 hover:bg-gray-600 hover:text-white">
              Category
            </h1>

            <div className="flex flex-row justify-between items-center w-full bg-white rounded-lg border border-gray-100">
              <span className="text-sm font-semibold text-gray-700 leading-tight">All Courses</span>
              <span className="text-md font-semibold text-gray-700">6</span>
            </div>

            <div className="flex flex-row justify-between items-center w-full bg-white rounded-lg border border-gray-100">
              <span className="text-sm text-gray-700 font-semibold">HTML & CSS</span>
              <span className="text-md text-gray-700 font-semibold">2</span>
            </div>

            <div className="flex flex-row justify-between items-center w-full bg-white rounded-lg border-gray-100">
              <span className="text-sm text-gray-700 font-semibold">JavaScript</span>
              <span className="text-md text-gray-700 font-semibold">2</span>
            </div>

            <div className="flex flex-row justify-between items-center w-full bg-white rounded-lg border-gray-100">
              <span className="text-sm text-gray-700 font-semibold">ReactJS</span>
              <span className="text-md text-gray-700 font-semibold">2</span>
            </div>

            <h1 className="text-md text-gray-700 font-semibold border-gray-700 border px-4 rounded-lg -ml-8 bg-gray-300 hover:bg-gray-600 hover:text-white">
              Level
            </h1>
            <span className="text-sm text-gray-700 font-semibold">All Levels</span>
            <span className="text-sm text-gray-700 font-semibold">Beginner</span>
            <span className="text-sm text-gray-700 font-semibold">Intermediate</span>
          </div>
        </div>

        {/* COLUMN 2-4: COURSE LIST GRID */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-5 py-5">
            
            {/* --- CARD 1 --- */}
            <div className="border border-gray-300 rounded-lg p-5 bg-white shadow-sm flex flex-row items-start gap-4 w-full">
              <span className="text-3xl p-2 bg-[#fff4f0] rounded-xl flex-shrink-0">🌐</span>
              <div className="flex flex-col flex-1">
                <span className="text-[12px] text-blue-700 font-bold uppercase tracking-wider">HTML & CSS</span>
                <h4 className="text-md text-black font-semibold mt-1">Web Foundations</h4>
                <span className="text-[12px] text-gray-500 font-medium mt-1">8 lessons · Beginner</span>
                <div className="flex flex-row justify-between items-center w-full mt-4 pt-3 border-t border-gray-100">
                  <span className="text-sm font-bold text-gray-900">Rs. 2,500</span>
                  <span className="text-xs text-orange-500">★★★★★</span>
                </div>
              </div>
            </div>

            {/* --- CARD 2 --- */}
            <div className="border border-gray-300 rounded-lg p-5 bg-white shadow-sm flex flex-row items-start gap-4 w-full">
              <span className="text-3xl p-2 bg-[#f5f0ff] rounded-xl flex-shrink-0">🎨</span>
              <div className="flex flex-col flex-1">
                <span className="text-[12px] text-blue-700 font-bold uppercase tracking-wider">CSS</span>
                <h4 className="text-md text-black font-semibold mt-1">Tailwind CSS Mastery</h4>
                <span className="text-[12px] text-gray-500 font-medium mt-1">10 lessons · Beginner</span>
                <div className="flex flex-row justify-between items-center w-full mt-4 pt-3 border-t border-gray-100">
                  <span className="text-sm font-bold text-gray-900">Rs. 3,000</span>
                  <span className="text-xs text-orange-500">★★★★☆</span>
                </div>
              </div>
            </div>

            {/* --- CARD 3 --- */}
            <div className="border border-gray-300 rounded-lg p-5 bg-white shadow-sm flex flex-row items-start gap-4 w-full">
              <span className="text-3xl p-2 bg-[#fffff0] rounded-xl flex-shrink-0">⚡</span>
              <div className="flex flex-col flex-1">
                <span className="text-[12px] text-blue-700 font-bold uppercase tracking-wider">JavaScript</span>
                <h4 className="text-md text-black font-semibold mt-1">JS DOM & Arrays</h4>
                <span className="text-[12px] text-gray-500 font-medium mt-1">12 lessons · Intermediate</span>
                <div className="flex flex-row justify-between items-center w-full mt-4 pt-3 border-t border-gray-100">
                  <span className="text-sm font-bold text-gray-900">Rs. 3,500</span>
                  <span className="text-xs text-orange-500">★★★★★</span>
                </div>
              </div>
            </div>

            {/* --- CARD 4 --- */}
            <div className="border border-gray-300 rounded-lg p-5 bg-white shadow-sm flex flex-row items-start gap-4 w-full">
              <span className="text-3xl p-2 bg-[#f0fff8] rounded-xl flex-shrink-0">⚛️</span>
              <div className="flex flex-col flex-1">
                <span className="text-[12px] text-blue-700 font-bold uppercase tracking-wider">ReactJS</span>
                <h4 className="text-md text-black font-semibold mt-1">React + Vite + Tailwind</h4>
                <span className="text-[12px] text-gray-500 font-medium mt-1">15 lessons · Intermediate</span>
                <div className="flex flex-row justify-between items-center w-full mt-4 pt-3 border-t border-gray-100">
                  <span className="text-sm font-bold text-gray-900">Rs. 5,000</span>
                  <span className="text-xs text-orange-500">★★★★★</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div> {/* 👈 FIXED: This div now correctly closes the Category Grid Section */}

      {/* ── FOOTER SECTION ── */}
      <footer className="w-full bg-white border border-gray-300 py-7  px-5">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 w-full">
          <div>
            <h3 className="font-display text-lg font-bold text-[#0a0a0f] mb-1">
              Can't find what you're looking for?
            </h3>
            <p className="text-sm text-[#7a7a8a]">
              Request a custom course or get in touch with our team.
            </p>
          </div>
          <button className="px-6 py-3 bg-[#2a6ae8] text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition">
            Contact Us
          </button>
        </div>
      </footer>

<div className="grid grid-cols-1 md:grid-cols-3  gap-5 py-5">
  <div className="flex flex-col rounded-sm border border-gray-300 justify-start items-start  p-4 bg-white w-full ">
    <span className="text-md text-gray-500 font-semibold ">Section 1</span>
    <span className="text-md text-black font-semibold">Search + Filter Navbar</span>
    <span className="text-xs text-gray-600 font-semibold">Search input uses useState. Filter buttons toggle active category state. Active button changes style conditionally.</span>
    <span className="text-xs text-blue-800 font-semibold pl-4 pt-2">useState + Conditional Class</span>
  </div>



 <div className="flex flex-col rounded-md border border-gray-300 justify-start items-start  p-4 bg-white w-full ">
    <span className="text-md text-gray-500 font-semibold ">Section 2</span>
    <span className="text-md text-black font-semibold">Sidebar + Course Grid</span>
    <span className="text-xs text-gray-600 font-semibold">Sidebar filter uses useState to track selected category. .map() renders course cards filtered by category.</span>
    <span className="text-xs text-green-600 font-semibold pl-4 pt-2">.map() + Filter Logic</span>
  </div>






   <div className="flex flex-col rounded-md border border-gray-300 justify-start items-start  p-4 bg-white w-full ">
    <span className="text-md text-gray-500 font-semibold ">Section 1</span>
    <span className="text-md text-black font-semibold">Search + Filter Navbar</span>
    <span className="text-xs text-gray-600 font-semibold">Search input uses useState. Filter buttons toggle active category state. Active button changes style conditionally.</span>
    <span className="text-xs text-blue-800 font-semibold pl-4 pt-2">useState + Conditional Class</span>
  </div>




</div>



    </main>
  );
}
















export default Courses