import {FaSearch} from 'react-icons/fa';
import  logo  from "../assets/Myntra_logo.png";
import {Link} from 'react-router-dom';


// import { useTheme } from "../pages/ThemeContext";

function Header() {
   
    // const { theme, toggleTheme} = useTheme();
  
    
  return (
   <nav className='bg-white shadow-md'>
    <div className='text-l container mx-auto flex justify-between items-center font-medium'>
      <div className=' flex space-x-15  items-center'>
          <Link to = "/">
           <img src={logo} alt="" className='w-12 h-7 ml-2 mt-2 inline-block items-center' />
           </Link>
         {/* {using map to produce nav items } */}
         <ul className='md:flex md:justify-between md:space-x-12 text-xs leading-10 font-bold ml-10 mt-3'>
         <li className='hover:text-gray-300'> 
            <Link to = "/men"> MEN</Link>
         </li>
         <li className='hover:text-gray-300'> 
            <Link to = "/women"> WOMAN</Link>
         </li>
         <li className='hover:text-gray-300'> 
            <Link to = "/kids"> KIDS</Link>
         </li>
         <li className='hover:text-gray-300'> 
            <Link to = "/"> HOME & LIVING</Link>
         </li>
         <li className='hover:text-gray-300'> 
            <Link to = "/">STUDIO </Link>
         </li>
         </ul>
      </div>
      <div className='space-x-12 hidden md:flex items-center max-w-6xl mx-auto p-2'>
        {/* <div className='hidden lg:flex items-center hover '>
          <div className='mode-switch'>
             {/* <label >
              <input type="checkbox" 
              // onChange={ toggleTheme}
              // checked = {theme === "dark"}/>
               <span className='slider-round'></span>
             </label> }
          </div>
          </div>*/}
          <form className='bg-slate-100 p-3 rounded-lg flex items-center w-full lg:w-30'>
          <FaSearch className = "text-slate-600"/>
            <input type="text" placeholder="Search" className='bg-transparent focus:outline-none pl-2 text-xs '/>
            
          </form>
        <button className=' bg-secondary  py-2 px-2 text-semibold  transition-all duration-300 rounded hover:text-white'>Sign Up</button>
      </div>

    </div>
   </nav>
  )
}

export default Header