
import {  NavLink } from 'react-router-dom';


const Navbar = () => {
  const navlink=<>
  <li className='font-bold md:text-white font-roboto'><NavLink to='/' className={({isActive})=>isActive?'text-white font-bold':'font-bold'} >Home</NavLink></li>
  <li className='font-bold md:text-white font-roboto'><NavLink to='/skill' className={({isActive})=>isActive?'text-white font-bold':'font-bold'} >Skills</NavLink></li>
  
  <li className='font-bold md:text-white font-roboto'><NavLink to='/project'>Project</NavLink></li>
  <li className='font-bold md:text-white font-roboto'><NavLink to='/education'>Education</NavLink></li>
  
  <li className='font-bold md:text-white font-roboto'><NavLink to='/contact' className={({isActive})=>isActive?'text-white font-bold':'font-bold'}>Contact</NavLink></li>
  
  </>
  return (
    <div className="navbar bg-custom-gradient  top-0 h-[78px] sticky z-50 ">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-white lg:hidden">
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
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {navlink}
        </ul>
      </div>
      <a className="btn btn-ghost text-xl font-roboto text-white">Roksana Akter</a>
    </div>
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {navlink}
      </ul>
    </div>
    
  </div>
  );
};

export default Navbar;
