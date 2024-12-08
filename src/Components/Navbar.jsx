
import {  NavLink } from 'react-router-dom';


const Navbar = () => {
  // const navlink=<>
  // <li className='font-bold md:text-white font-roboto'><NavLink to='/' className={({isActive})=>isActive?'text-white font-bold':'font-bold'} >Home</NavLink></li>
  // <li className='font-bold md:text-white font-roboto'><NavLink to='/skill' className={({isActive})=>isActive?'text-white font-bold':'font-bold'} >Skills</NavLink></li>
  
  // <li className='font-bold md:text-white font-roboto'><NavLink to='/project'>Project</NavLink></li>
  // <li className='font-bold md:text-white font-roboto'><NavLink to='/education'>Education</NavLink></li>
  
  // <li className='font-bold md:text-white font-roboto'><NavLink to='/contact' className={({isActive})=>isActive?'text-white font-bold':'font-bold'}>Contact</NavLink></li>
  
  // </>
  const navlink = <>
    <li className=' font-arimo md:text-white '>
      <NavLink 
        to='/' 
        className={({ isActive }) => 
          isActive 
            ? 'text-emerald-400 underline font-bold ' 
            : 'text-white font-bold hover:text-emerald-400'
        }
      >
        Home
      </NavLink>
    </li>
    <li className=' font-arimo md:text-white '>
      <NavLink 
        to='/skill' 
        className={({ isActive }) => 
          isActive 
            ? 'text-emerald-400 underline font-bold ' 
            : 'text-white font-bold hover:text-emerald-400'
        }
      >
        Skills
      </NavLink>
    </li>
    <li className=' font-arimo md:text-white '>
      <NavLink 
        to='/project' 
        className={({ isActive }) => 
          isActive 
            ? 'text-emerald-400 underline font-bold' 
            : 'text-white font-bold hover:text-emerald-400'
        }
      >
        Project
      </NavLink>
    </li>
    <li className=' font-arimo md:text-white '>
      <NavLink 
        to='/education' 
        className={({ isActive }) => 
          isActive 
            ? 'text-emerald-400 underline font-bold' 
            : 'text-white font-bold hover:text-emerald-400'
        }
      >
        Education
      </NavLink>
    </li>
    <li className=' font-arimo md:text-white '>
      <NavLink 
        to='/contact' 
        className={({ isActive }) => 
          isActive 
            ? 'text-emerald-400 underline font-bold' 
            : 'text-white font-bold hover:text-emerald-400'
        }
      >
        Contact
      </NavLink>
    </li>
  </>;

  return (
    <div className="navbar bg-neutral-900 lg:pl-14 lg:pr-14 lg:pt-14 lg:pb-8  top-0 h-[78px] sticky z-50 ">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-neutral lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className=" dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 ">
          {navlink}
        </ul>
      </div>
      <a className="btn btn-ghost text-2xl font-arimo text-white hover:bg-transparent">Roksana<span className='text-emerald-400'>.</span></a>
    </div>
    <div className="navbar-end hidden lg:flex">
      <ul className="flex gap-6 px-1">
       {navlink}
      </ul>
    </div>
    
  </div>
  );
};

export default Navbar;
