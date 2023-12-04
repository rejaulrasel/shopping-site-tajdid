import { Link } from 'react-router-dom';
import './Sidebar.css'
import logo from '../../assets/images/game-icons_ubisoft-sun.svg'
import { RiStackLine } from "react-icons/ri";
import { IoStatsChartSharp } from "react-icons/io5";

import { CiHome } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";



const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu min-h-full">
                        {/* Sidebar content here */}

                        <li><Link to='/'><img src={logo} alt="" /><span className='store-logo'>Tajdid Store</span></Link></li>
                        <li><Link to='/'><RiStackLine />Products
                        </Link></li>
                        <li><Link to='/'><IoStatsChartSharp />Analytics<FiChevronDown />
                        </Link></li>
                        <li><Link to='/'><FiDollarSign />Billing<FiChevronDown />
                        </Link></li>
                        <li><Link to='/'><CiHome /> Company<FiChevronDown />
                        </Link></li>
                        <li><Link to='/'><FiUser />Admin</Link></li>
                        <li><Link to='/'><MdOutlineLogout /> Logout</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;