import './header.scss'
import yekta from './yektanet-logo.jpg'
const Header = () => {

    return (
        <div className="header border-b">
            <a href="https://www.yektanet.com/">
                <img className="logo"  src={yekta} alt="yektanet" />
            </a>
        </div>
    )
}

export default Header;
