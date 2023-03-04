import EarthLogo from "../images/earth.png";

function Header() {
    return (
        <div className="app-header">
            <img src={EarthLogo} alt="earth" className="header-logo" />
            <p className="header-text">my travel journal.</p>
        </div>
    );
}

export default Header;
