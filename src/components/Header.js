import { Navbar } from 'reactstrap';
import logo from '../app/assets/images/logo.png'

const Header = () => {
    return (
        <>
            <a href='/'>
                <div className='logo'>
                    <img src={logo} height='300'alt='logo' />
                </div>
            </a>
            <Navbar sticky='top' expand='md'>

            </Navbar>
        </>
    );
};
  
export default Header;