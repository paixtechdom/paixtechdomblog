import { BiMenu, BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
/* 

*/

const Header = () => {
  return (
    <header className='center z-[50] fixed w-full bg-primary backdrop-blur-2xl bg-opacity-50 top-0'>

        <div className="navbar w-11/12 lg:w-10/12 m-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <BiMenu />
              </div>
              {/* <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow">
                <li><a>Technology</a></li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul> */}
            </div>
            <Link to={"/"} className="text-2xl font-bold p-0 ">PAIX <span className='text-blue-600'>BLOG</span></Link>
          </div>
          {/* <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Technology</a></li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </details>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div> */}

          <div className="navbar-end flex gap-4">
            <div className="flex items-center input gap-3">
              <BiSearch className='text-xl'/>
              <input type="text" className='' placeholder='Search Blogs'/>
            </div>
           </div>
    </div>
    </header>
  )
}

export default Header