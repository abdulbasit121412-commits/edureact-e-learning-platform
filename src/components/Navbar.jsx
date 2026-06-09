import { Link } from 'react-router-dom';



function Navbar(){
    return (
        <nav className="bg-white  z-50 sticky top-0 left-0 w-full z-50 ">
            <div className="relative flex justify-betweeen  items-center gap-5 p-5 m-auto  ">
                <h1 className="text-5xl text-black-800 font-semibold mb-2">Edu<span className="text-orange-600">React</span></h1>
              <ul className="flex flex-row items-center mx-auto gap-5">
  <li>
    <Link to="/" className="text-md font-semibold text-gray-700 hover:text-green-600">Home</Link>
  </li>
  <li>
    <Link to="/about" className="text-md font-semibold text-gray-700 hover:text-green-600">About</Link>
  </li>
  <li>
    <Link to="/course" className="text-md font-semibold text-gray-700 hover:text-green-600">Course</Link>
  </li>
  <li>
    <Link to="/contact" className="text-md font-semibold text-gray-700 hover:text-green-600">Contact</Link>
  </li>
</ul>
               <button className="px-6 py-2 font-semibold text-white  bg-gray-700 rounded-xl hover:bg-black transition"> Get Started</button>
            </div>

        </nav>
    )
}





export default Navbar