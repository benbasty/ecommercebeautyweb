import './header.css';
import {AiFillShopping} from 'react-icons/ai';
import LOGO from '../../assets/logo.png';
function Header() {
    return(
        <section>
            <div className='container'>
                <div className='logo'>
                    <img src={LOGO} alt="logo" />
                    <span>Ordinary</span>
                </div>
                <div className='nav'>
                    <div className='menu'>
                        <ul className='menu'>
                            <li>Collections</li>
                            <li>Brands</li>
                            <li>New</li>
                            <li>Sales</li>
                            <li>ENG</li>
                        </ul>
                    </div>
                    <input type="text" className='search' placeholder='Search'/>
                    <AiFillShopping className='cart'/>
                </div>
            </div>
        </section>
    )
}
export default Header;