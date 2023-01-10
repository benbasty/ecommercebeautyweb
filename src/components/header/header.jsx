import './header.css';
import { useState } from 'react';
import {AiFillShopping} from 'react-icons/ai';
import LOGO from '../../assets/logo.png';
import {GoThreeBars} from 'react-icons/go';
function Header() {

    const [ShowMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!ShowMenu)
    }

    return(
        <section>
            <div className='container-header'>
                <div className='logo'>
                    <img src={LOGO} alt="logo" />
                    <span>Ordinary</span>
                </div>
                <div className='nav'>
                    
                    <div className="bars" onClick={toggleMenu}>
                        <GoThreeBars />
                    </div>
                    
                    <ul className='menu' style={{display: ShowMenu ? 'inherit':'none'}}>
                        <li>Collections</li>
                        <li>Brands</li>
                        <li>New</li>
                        <li>Sales</li>
                        <li>ENG</li>
                    </ul>
                    
                    <input type="text" className='search' placeholder='Search'/>
                    <AiFillShopping className='cart'/>
                </div>
            </div>
        </section>
    )
}
export default Header;